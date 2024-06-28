import { ReactNode } from 'react';

export type NavigationLinks = {
  [key: string]: string[];
}

export type WithNavigationProps = {
  children?: ReactNode;
}
