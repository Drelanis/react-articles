import path from 'path';
import { ResolveOptions } from 'webpack';

import { BuildOptions } from '../../types';

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      $app: path.resolve(__dirname, '/src/app/'),
      $shared: path.resolve(__dirname, '/src/shared/'),
      $entities: path.resolve(__dirname, '/src/entities/'),
      $features: path.resolve(__dirname, '/src/features/'),
      $pages: path.resolve(__dirname, '/src/pages/'),
      $widgets: path.resolve(__dirname, '/src/widgets/'),
    },
  };
};
