import _ from 'lodash';
import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps
} from 'styled-components';
import { breakpoints } from './breakpoints';

export function getVariantColor(colorProperty: string) {
  return ({ theme, variant }: { theme: DefaultTheme; variant: string }) =>
    _.get(theme, `colors.${variant}.${colorProperty}`);
}

type BreakpointKeyType = keyof DefaultTheme['breakpoints'];

type CSSByBreakpointType = {
  [key in BreakpointKeyType]?:
    | FlattenSimpleInterpolation
    | FlattenInterpolation<ThemeProps<DefaultTheme>>;
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
