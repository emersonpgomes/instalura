import styled, { css } from 'styled-components';
import { getBreakpointsMedia } from '../../theme/utils';
import { TextStyleVariants } from '../text/text-style';

export const MenuStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;

  ${getBreakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

export const LeftSideMenuStyle = styled.div`
  padding: 0;
  margin: 0;
  order: 1;

  ${getBreakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

export const CentralSideMenuStyle = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid #88989e;
  border-bottom: 1px solid #88989e;
  padding: 12px;

  ${getBreakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989e;
    transition: 200ms ease-in-out;

    ${getBreakpointsMedia({
      xs: TextStyleVariants.smallestException,
      md: TextStyleVariants.paragraph1,
    })}

    &:hover,
    &:focus {
      font-weight: 500;
      color: #070c0e;
    }
  }
`;

export const RightSideMenuStyle = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;

  ${getBreakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;
