import styled, { css, DefaultTheme } from 'styled-components';
import { CSSPropStyle } from '../../theme/interface';
import {
  getBreakpointsMedia,
  getVariantColor,
  propToStyle
} from '../../theme/utils';

function getTypographStyle(variant: keyof DefaultTheme['typography']) {
  return css`
    ${({ theme }) => css`
      font-size: ${theme.typography[variant].fontSize};
      font-weight: ${theme.typography[variant].fontWeight};
      line-height: ${theme.typography[variant].lineHeight};
    `}
  `;
}

export const TextStyleVariants = {
  paragraph1: getTypographStyle('paragraph1'),
  smallestException: getTypographStyle('smallestException'),
  title: css`
    ${getTypographStyle('titleXS')}
    ${getBreakpointsMedia({
      md: getTypographStyle('title'),
    })}
  `,
};

export interface TextStyleProps
  extends Pick<CSSPropStyle, 'textAlign' | 'marginBottom' | 'margin'> {
  variant: keyof typeof TextStyleVariants;
  color?: 'tertiary.main' | 'tertiary.light';
}

export const TextStyle = styled.span<TextStyleProps>`
  ${({ variant = 'paragraph1' }) => TextStyleVariants[variant]}

  color: ${getVariantColor('color', 'color')};

  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;
