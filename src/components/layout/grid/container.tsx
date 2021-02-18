import styled, { css } from 'styled-components';
import { CSSPropStyle } from '../../theme/interface';
import { getBreakpointsMedia, propToStyle } from '../../theme/utils';

export type GridContainerProps = Pick<CSSPropStyle, 'marginTop'>

export const GridContainer = styled.div<GridContainerProps>`
  width: 100%;
  padding: 0 28px;
  margin: 0 auto;

  ${getBreakpointsMedia({
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
      padding: 0 16px;
    `,
    lg: css`
      max-width: 1160px;
    `,
  })}

  ${propToStyle('marginTop')}
`;
