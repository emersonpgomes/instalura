import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { BreakpointKeysType } from '../../theme/interface';
import { getBreakpointsMedia } from '../../theme/utils';

const MAX_GRID_COLUMNS = 12;

interface GridColProps {
  offset?: number | { [key in BreakpointKeysType]?: number };
  span: number | { [key in BreakpointKeysType]?: number };
}

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
  propName: keyof GridColProps,
  getCSSFn: (value: number) => FlattenSimpleInterpolation
) {
  return (prop: GridColProps) => {
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
`;
