import { DefaultTheme } from "styled-components";
import { themeConfigDark } from "./theme-config-dark";
import { themeConfigLight } from "./theme-config-light";

export enum Themes {
  Light = "light",
  Dark = "dark",
}

const themes = new Map<Themes, DefaultTheme>();

export function getTheme(name: Themes) {
  const theme = themes.get(name);

  if (!theme) {
    throw new Error('O tema selecionado não existe!');
  }

  return theme;
}

themes.set(Themes.Light, themeConfigLight);
themes.set(Themes.Dark, themeConfigDark);
