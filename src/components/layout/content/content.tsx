import React, { ReactNode } from 'react';
import { ContentStyle } from './content-style';

export interface ContentProps {
  children: ReactNode;
}

// eslint-disable-next-line react/jsx-props-no-spreading
export const Content = (props: ContentProps) => <ContentStyle {...props} />;
