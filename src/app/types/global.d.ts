declare module '*.module.scss';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const IS_DEV: boolean;
declare const API: string;
declare const PROJECT: 'storybook' | 'jest' | 'frontend';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- exception
type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
