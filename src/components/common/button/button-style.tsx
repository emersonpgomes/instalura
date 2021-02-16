import styled, { css } from 'styled-components';
import { getVariantColor } from '../../../utils/get-variant-color';
import { TextStyleVariants } from '../text/text-style';

const ButtonGhostStyle = css`
  color: ${getVariantColor('color')};
  background: transparent;
`;

const ButtonDefaultStyle = css`
  color: ${getVariantColor('contrastText')};
  background-color: ${getVariantColor('color')};
`;

export interface ButtonStyleProps {
  ghost?: boolean;
  variant:
    | 'primary.main'
    | 'secondary.main'
    | 'tertiary.main'
    | 'tertiary.light';
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${TextStyleVariants.smallestException}

  ${({ ghost }) => (ghost ? ButtonGhostStyle : ButtonDefaultStyle)}

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
