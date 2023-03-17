module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // この行を追加
  moduleNameMapper: {
    // 既存の設定を保持
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/next-env.d.ts',
  ],
  // その他の設定があればここに
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
};
