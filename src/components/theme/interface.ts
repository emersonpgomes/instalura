// import original module declarations
import { CSSObject, CSSProperties, DefaultTheme, FlattenInterpolation, FlattenSimpleInterpolation, ThemeProps } from 'styled-components';

type ColorType = string;

type BorderRadiusType = string;

type TransitionType = string;

type FontFamilyType = string;

type ScreenWidth = number;

interface IThemeConfigColor {
  color: ColorType;
}

interface IThemeConfigContrastText {
  contrastText: ColorType;
}

interface IThemeColors {
  background: {
    light: IThemeConfigColor;
    main: IThemeConfigColor;
  };
  borders: {
    main: IThemeConfigColor;
  };
  primary: {
    main: IThemeConfigColor & IThemeConfigContrastText;
  };
  secondary: {
    main: IThemeConfigColor & IThemeConfigContrastText;
  };
  tertiary: {
    main: IThemeConfigColor & IThemeConfigContrastText;
    light: IThemeConfigColor & IThemeConfigContrastText;
  };
  // modes: {
  //   dark: {}
  // }
};

interface IThemeConfigTypography {
  fontSize: string;
  fontWeight: string;
  lineHeight: number;
}

interface IThemeConfigTypographyVariants {
  title: IThemeConfigTypography;
  titleXS: IThemeConfigTypography;
  subTitle: IThemeConfigTypography;
  paragraph1: IThemeConfigTypography;
  paragraph2: IThemeConfigTypography;
  smallestException: IThemeConfigTypography;
}

interface IThemeConfigBreakpoints {
  xs: ScreenWidth;
  sm: ScreenWidth;
  md: ScreenWidth;
  lg: ScreenWidth;
  xl: ScreenWidth;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IThemeColors;
    fontFamily: FontFamilyType;
    borderRadius: BorderRadiusType;
    transition: TransitionType;
    typography: IThemeConfigTypographyVariants;
    breakpoints: IThemeConfigBreakpoints;
  }
}

export type BreakpointKeysType = keyof IThemeConfigBreakpoints;

export type CSSByBreakpointType = {
 [key in BreakpointKeysType]?:
   | FlattenSimpleInterpolation
   | FlattenInterpolation<ThemeProps<DefaultTheme>>
   | CSSObject;
};

export type CSSPropStyle = {
  [cssKey in keyof CSSProperties]:
    | CSSProperties[cssKey]
    | { [key in BreakpointKeysType]?: CSSProperties[cssKey] };
};
