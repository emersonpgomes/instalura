import React, { ReactNode } from 'react';
import { ButtonStyle, ButtonStyleProps } from './button-style';

export interface ButtonProps extends ButtonStyleProps {
  children: ReactNode;
}

// eslint-disable-next-line react/jsx-props-no-spreading
export const Button = (props: ButtonProps) => <ButtonStyle {...props} />;
