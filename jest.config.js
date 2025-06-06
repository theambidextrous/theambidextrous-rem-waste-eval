
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(css|scss)$': '<rootDir>/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!react-leaflet)/',
  ],
};