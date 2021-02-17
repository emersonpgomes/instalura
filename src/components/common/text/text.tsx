import React, { ReactNode } from 'react';
import { TextStyle, TextStyleProps } from './text-style';

export interface TextProps extends TextStyleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'li' | 'span';
  children: ReactNode;
}

export const Text = ({ tag = 'span', ...otherProps }: TextProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TextStyle as={tag} {...otherProps} />
);
