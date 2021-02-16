import _ from 'lodash';
import { DefaultTheme } from 'styled-components';

export function getVariantColor(colorProperty: string) {
  return ({ theme, variant }: { theme: DefaultTheme; variant: string }) =>
    _.get(theme, `colors.${variant}.${colorProperty}`);
}
