import React, { ReactNode } from 'react';
import { Content } from './content';
import { Footer } from './footer';
import { Header } from './header';
import { LayoutStyle } from './layout-style';

export interface LayoutProps {
  children: ReactNode;
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Layout = (props: LayoutProps) => <LayoutStyle {...props} />;

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
