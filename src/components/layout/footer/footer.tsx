import React, { ReactNode } from 'react';
import { FooterStyle } from './footer-style';

export interface FooterProps {
  children: ReactNode;
}

// eslint-disable-next-line react/jsx-props-no-spreading
export const Footer = (props: FooterProps) => <FooterStyle {...props} />;
