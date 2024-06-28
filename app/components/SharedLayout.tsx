import { ReactElement, ReactNode } from 'react';
import Navigation from './Navigation'
import SocialIcons from './SocialIcons';
import { WithNavigationProps } from '../lib/types';

export default function SharedLayout<P extends WithNavigationProps>(
  Component: React.ComponentType<P>
) {
  return function WithNavigation(props: P) {
    return (
      <div className="max-w-screen-lg w-full min-h-dvh h-full mx-auto">
        <Navigation />
        <Component {...props} />
        <div className="max-w-80 mx-auto w-full">
          <SocialIcons />
        </div>
      </div>
    );
  }
}
