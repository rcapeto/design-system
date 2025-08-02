/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
  transformIgnorePatterns: ['node_modules/(?!p-defer)'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': ['ts-jest'],
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '@rcapeto-ui/tokens': '<rootDir>/../tokens/dist/index.js',
  },
  resolver: null,
  testMatch: ['<rootDir>/src/components/**/**/*.spec.tsx'],
  displayName: 'React Tests',
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 85,
      functions: 85,
      lines: 85,
    },
  },
}
