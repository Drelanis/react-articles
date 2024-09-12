/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  rootDir: '../../',
  moduleDirectories: ['node_modules', 'src'],
  testMatch: [
    // ! Common regexp for both platforms Mac and Windows
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  modulePaths: ['<rootDir>src'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '^\\$shared': '<rootDir>src/shared',
    '^\\$lib': '<rootDir>src/shared/lib',
    '^\\$entities': '<rootDir>src/entities',
    '^\\$app': '<rootDir>src/app',
    '^\\$pages': '<rootDir>src/pages',
    '^\\$widgets': '<rootDir>src/widgets',
    '^\\$features': '<rootDir>src/features',
  },
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
  globals: {
    API: '',
    IS_DEV: true,
    PROJECT: 'jest',
  },
};
