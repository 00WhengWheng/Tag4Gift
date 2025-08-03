export default {
  displayName: 'main-e2e',
  preset: '../jest.preset.js',
  globalSetup: '<rootDir>/../main-e2e/src/support/global-setup.ts',
  globalTeardown: '<rootDir>/../main-e2e/src/support/global-teardown.ts',
  setupFiles: ['<rootDir>/../main-e2e/src/support/test-setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/../main-e2e/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../coverage/main-e2e',
};
