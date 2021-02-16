import React, { ReactNode } from 'react';
import { HeaderStyle } from './header-style';

export interface HeaderProps {
  children: ReactNode;
}

// eslint-disable-next-line react/jsx-props-no-spreading
export const Header = (props: HeaderProps) => <HeaderStyle {...props} />
