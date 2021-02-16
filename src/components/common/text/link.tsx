import React, { ReactNode } from 'react';
import { TextStyle, TextStyleProps } from './text-style';

export interface LinkProps extends Omit<TextStyleProps, 'variant'> {
  href: string;
  children: ReactNode;
}

export const Link = ({ href, ...otherProps }: LinkProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TextStyle as="a" variant="smallestException" href={href} {...otherProps} />
);
