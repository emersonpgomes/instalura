import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { BreakpointKeysType, CSSPropStyle } from '../../theme/interface';
import { getBreakpointsMedia, propToStyle } from '../../theme/utils';

const MAX_GRID_COLUMNS = 12;

interface GridColOwnProps {
  offset?: number | { [key in BreakpointKeysType]?: number };
  span: number | { [key in BreakpointKeysType]?: number };
}

type GridColCSSProps = Pick<
  CSSPropStyle,
  'display' | 'alignItems' | 'justifyContent' | 'flexDirection'
>;

export type GridColProps = GridColOwnProps & GridColCSSProps;

function getColWidth(span: number) {
  return (100 * Math.min(span, MAX_GRID_COLUMNS)) / MAX_GRID_COLUMNS;
}

function getColSpanStyle(span: number) {
  const colSpanWidth = getColWidth(span);
  return css`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: ${colSpanWidth}%;
    max-width: ${colSpanWidth}%;
  `;
}

function getColOffsetStyle(offset: number) {
  return css`
    margin-left: ${getColWidth(offset)}%;
  `;
}

function getStyle(
  propName: keyof GridColOwnProps,
  getCSSFn: (value: number) => FlattenSimpleInterpolation
) {
  return (prop: GridColOwnProps) => {
    const propValue = prop[propName];

    if (typeof propValue === 'number') {
      return getCSSFn(propValue);
    }

    return getBreakpointsMedia({
      ...(propValue?.xs && { xs: getCSSFn(propValue.xs) }),
      ...(propValue?.sm && { sm: getCSSFn(propValue.sm) }),
      ...(propValue?.md && { md: getCSSFn(propValue.md) }),
      ...(propValue?.lg && { lg: getCSSFn(propValue.lg) }),
      ...(propValue?.xl && { xl: getCSSFn(propValue.xl) }),
    });
  };
}

export const GridCol = styled.div<GridColProps>`
  padding: 0 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${getStyle('span', getColSpanStyle)}
  ${getStyle('offset', getColOffsetStyle)}

  ${propToStyle('display')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexDirection')}
`;
