import _ from 'lodash';
import {
  css,
  CSSObject,
  CSSProperties,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps
} from 'styled-components';
import { breakpoints } from './breakpoints';

export function getVariantColor<PropType extends { theme: DefaultTheme }>(
  themeColorProperty: string,
  componentVariantProp?: keyof PropType
) {
  return (prop: PropType) => {
    const variant = _.get(prop, componentVariantProp || 'variant');
    return _.get(prop.theme, `colors.${variant}.${themeColorProperty}`);
  };
}

type BreakpointKeyType = keyof DefaultTheme['breakpoints'];

type CSSByBreakpointType = {
  [key in BreakpointKeyType]?:
    | FlattenSimpleInterpolation
    | FlattenInterpolation<ThemeProps<DefaultTheme>>
    | CSSObject;
};

export function getBreakpointsMedia(cssByBreakpoint: CSSByBreakpointType) {
  const breakpointKeys = Object.keys(breakpoints) as BreakpointKeyType[];
  return breakpointKeys
    .filter((key) => key in cssByBreakpoint)
    .map((key) => {
      const screenWidth = breakpoints[key];
      return css`
        @media only screen and (min-width: ${screenWidth}px) {
          ${cssByBreakpoint[key]}
        }
      `;
    });
}

export type CSSPropStyle = {
  [cssKey in keyof CSSProperties]:
    | CSSProperties[cssKey]
    | { [key in BreakpointKeyType]?: CSSProperties[cssKey] };
};

export function propToStyle(propName: keyof CSSPropStyle) {
  return (props: CSSPropStyle) => {
    const propValue = props[propName];

    if (typeof propValue === 'object') {
      return getBreakpointsMedia({
        ...(propValue.xs && { xs: { [propName]: propValue.xs } }),
        ...(propValue.sm && { sm: { [propName]: propValue.sm } }),
        ...(propValue.md && { md: { [propName]: propValue.md } }),
        ...(propValue.lg && { lg: { [propName]: propValue.lg } }),
        ...(propValue.xl && { xl: { [propName]: propValue.xl } }),
      });
    }

    return { [propName]: propValue };
  };
}
