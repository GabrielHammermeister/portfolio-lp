module.exports = {
   testEnvironment: 'jsdom',
   testPathIgnorePatterns: ['/node_modules/', '/.next/'],
   coveragePathIgnorePatterns: [
      '/styles/',
      '/themes/',
      '/types/',
      'stories.tsx',
      '/pages/[index.tsx, _app.tsx, _document.tsx]'
   ],
   collectCoverage: true,
   collectCoverageFrom: ['src/**/*.{ts,tsx}'],
   setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
   modulePaths: ['<rootDir>/src/'],
   moduleNameMapper: {
      '^styled-components':
         '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
   }
}
