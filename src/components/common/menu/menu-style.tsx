import styled from 'styled-components';

export const MenuStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
`;

export const LeftSideMenuStyle = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
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
  border-top: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  padding: 12px;

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989e;
    transition: 200ms ease-in-out;

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
`;
