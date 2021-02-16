import styled, { css } from 'styled-components';

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typography.paragraph1.fontSize};
    font-weight: ${theme.typography.paragraph1.fontWeight};
    line-height: ${theme.typography.paragraph1.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typography.smallestException.fontSize};
    font-weight: ${theme.typography.smallestException.fontWeight};
    line-height: ${theme.typography.smallestException.lineHeight};
  `}
`;

export const TextStyleVariants = {
  paragraph1,
  smallestException
}

export interface TextStyleProps {
  variant: keyof typeof TextStyleVariants;
}

export const TextStyle = styled.span<TextStyleProps>`
   ${({ variant }) => TextStyleVariants[variant]}
`;
