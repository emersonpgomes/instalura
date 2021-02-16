import React from 'react';
import { Button } from '../button';
import { Logo } from '../logo';
import { Link } from '../text/link';
import {
  CentralSideMenuStyle,
  LeftSideMenuStyle,
  MenuStyle,
  RightSideMenuStyle
} from './menu-style';

const menuLinks = [
  { url: '/', name: 'Home' },
  { url: '/faq', name: 'Perguntas Frequentes' },
  { url: '/sobre', name: 'Sobre' },
];

export const Menu = () => {
  const links = menuLinks.map((link) => (
    <li key={link.url}>
      <Link href={link.url}>{link.name}</Link>
    </li>
  ));

  return (
    <MenuStyle>
      <LeftSideMenuStyle>
        <Logo />
      </LeftSideMenuStyle>
      <CentralSideMenuStyle as="ul">{links}</CentralSideMenuStyle>
      <RightSideMenuStyle>
        <Button variant="secondary.main" ghost>
          Entrar
        </Button>
        <Button variant="primary.main">Cadastrar</Button>
      </RightSideMenuStyle>
    </MenuStyle>
  );
};
