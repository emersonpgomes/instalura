// import original module declarations
import 'styled-components';

type ColorType = string;

type BorderRadiusType = string;

type TransitionType = string;

type FontFamilyType = string;

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

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IThemeColors;
    fontFamily: FontFamilyType;
    borderRadius: BorderRadiusType;
    transition: TransitionType;
    typography: IThemeConfigTypographyVariants;
  }
}
