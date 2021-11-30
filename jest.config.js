// jest.config.js
module.exports = {
  verbose: true,
  notify: false,
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '\\.test\\.(ts|tsx)$',
  // FIXME: return to jest-expect-message once updated for jest v27
  setupFilesAfterEnv: ['@alex_neo/jest-expect-message'],
  testPathIgnorePatterns: ['/node_modules/'],
  coveragePathIgnorePatterns: ['/node_modules/', 'src/app.ts', 'src/server.ts', 'src/lib/logger.ts', 'src/config'],
};
