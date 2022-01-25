// module.exports = {
//    testEnvironment: 'jsdom',
//    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
//    coveragePathIgnorePatterns: [
//       '/styles/',
//       '/themes/',
//       '/types/',
//       'stories.tsx',
//       '/pages/[index.tsx, _app.tsx, _document.tsx]'
//    ],
//    collectCoverage: true,
//    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
//    setupFilesAfterEnv: [
//       '<rootDir>/.jest/jest.setup.ts',
//       '<rootDir>/.jest/jestGlobalMocks.ts'
//    ],
//    modulePaths: ['<rootDir>/src/'],
//    moduleNameMapper: {
//       '^styled-components':
//          '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
//    }
// }
module.exports = {
   testEnvironment: 'jsdom',
   testPathIgnorePatterns: ['/node_modules/', '/.next/'],
   collectCoverage: true,
   collectCoverageFrom: [
      'src/**/*.ts(x)?',
      '!src/**/*.stories.tsx',
      '!src/pages/*',
      '!src/styles/*',
      '!src/types/*'
   ],
   setupFilesAfterEnv: [
      '<rootDir>/.jest/jest.setup.ts',
      '<rootDir>/.jest/jestGlobalMocks.ts'
   ],
   modulePaths: ['<rootDir>/src/'],
   transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
   }
}
