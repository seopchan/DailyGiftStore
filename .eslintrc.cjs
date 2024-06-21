module.exports = {
  root: true, // 프로젝트의 루트 디렉토리로 설정
  env: {
    browser: true, // 브라우저 환경에서 실행되는 코드로 설정
    es2020: true // ECMAScript 2020을 사용하도록 설정
  },
  parser: '@typescript-eslint/parser', // TypeScript 코드를 파싱하기 위해 사용되는 파서
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX 문법을 사용할 수 있도록 설정
    },
    ecmaVersion: 12, // ECMAScript 버전을 12로 설정
    sourceType: 'module', // 모듈 시스템을 사용할 수 있도록 설정
  },
  plugins: [
    'react-refresh', // React Fast Refresh를 위한 플러그인
    '@typescript-eslint', // TypeScript ESLint 플러그인입니다.
    'react', // React ESLint 플러그인입니다.
    'react-hooks', // React Hooks ESLint 플러그인입니다.
    'prettier', // Prettier ESLint 플러그인입니다.
  ],
  extends: [
    'eslint:recommended', // ESLint의 추천 설정을 사용
    'plugin:@typescript-eslint/recommended', // TypeScript ESLint 플러그인의 추천 설정을 사용
    'plugin:react-hooks/recommended', // React Hooks ESLint 플러그인의 추천 설정을 사용
    'plugin:prettier/recommended', // Prettier 플러그인의 추천 설정을 사용
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // ESLint가 무시할 파일 및 디렉토리 패턴
  rules: {
    'prettier/prettier': 'error', // Prettier 규칙을 ESLint 규칙으로 설정, 위반 시 오류를 표시
    'react/prop-types': 'off', // prop-types 검사를 비활성화 (TypeScript 사용 시 불필요).
    'react/react-in-jsx-scope': 'off', // React를 JSX 스코프 내에서 항상 포함해야 하는 규칙을 비활성화
    '@typescript-eslint/no-unused-vars': ['error'], // 사용되지 않는 변수를 허용하지 않음
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 함수 및 메서드의 반환 유형을 명시적으로 설정하는 규칙을 비활성화
    'react-refresh/only-export-components': [
      'warn', // 컴포넌트만 내보내도록 강제하는 규칙 (경고 수준)
      { allowConstantExport: true } // 상수로 내보내는 것은 허용
    ],
  },
}
