import _ from 'lodash';
import { css, DefaultTheme } from 'styled-components';
import { breakpoints } from './breakpoints';
import {
  BreakpointKeysType,
  CSSByBreakpointType,
  CSSPropStyle
} from './interface';

export function getVariantColor<PropType extends { theme: DefaultTheme }>(
  themeColorProperty: string,
  componentVariantProp?: keyof PropType
) {
  return (prop: PropType) => {
    const variant = _.get(prop, componentVariantProp || 'variant');
    return _.get(prop.theme, `colors.${variant}.${themeColorProperty}`);
  };
}

export function getBreakpointsMedia(cssByBreakpoint: CSSByBreakpointType) {
  const breakpointKeys = Object.keys(breakpoints) as BreakpointKeysType[];
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
