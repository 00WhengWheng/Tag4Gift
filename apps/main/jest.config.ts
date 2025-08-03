export default {
  displayName: 'main',
  preset: '<rootDir>/jest-preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: require('path').resolve(__dirname, 'tsconfig.spec.json') }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../coverage/main',
};
