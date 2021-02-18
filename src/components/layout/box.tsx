import styled from 'styled-components';
import { CSSPropStyle } from '../theme/interface';
import { propToStyle } from '../theme/utils';

export type BoxProps = Pick<CSSPropStyle,
| 'display'
| 'flex'
| 'flexDirection'
| 'justifyContent'
| 'flexWrap'
| 'backgroundImage'
| 'backgroundRepeat'
| 'backgroundPosition'>

export const Box = styled.div<BoxProps>`
  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;
