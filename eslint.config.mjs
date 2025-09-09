import { FlatCompat } from '@eslint/eslintrc'
import functional from 'eslint-plugin-functional'
import unusedImports from 'eslint-plugin-unused-imports'
import { dirname } from 'path'
import tseslint from 'typescript-eslint'
import { fileURLToPath } from 'url'

// eslint-disable-next-line @typescript-eslint/no-shadow
const __filename = fileURLToPath(import.meta.url)
// eslint-disable-next-line @typescript-eslint/no-shadow
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const functionalStyles = {
  plugins: {
    functional
  },
  rules: {
    // 변수 선언 관련
    'functional/no-let': 'error', // let, var 대신 const 사용
    'no-var': 'error', // var 금지
    'prefer-const': 'error', // const 선호
    // 루프 금지
    'functional/no-loop-statements': 'error', // 모든 루프문 금지
    // 데이터 불변성
    'functional/immutable-data': 'warn', // 배열/객체 변이 메서드 경고
    // 파라미터 관련
    'no-param-reassign': ['error', { props: true }] // 파라미터 재할당 금지
  }
}

const unUsedImportsStyles = {
  plugins: {
    'unused-imports': unusedImports
  },
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  }
}

const customCodeStyles = {
  plugins: {
    '@typescript-eslint': tseslint.plugin
  },
  rules: {
    'max-depth': ['error', 2],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' }
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSInterfaceDeclaration',
        message: 'Interface 대신 type 을 사용하세요.'
      },
      {
        selector: 'ConditionalExpression',
        message: '삼항 연산자 대신 if 를 사용하세요.'
      }
    ],
    'no-shadow': 'off', // 기본 ESLint 규칙은 비활성화
    '@typescript-eslint/no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        allow: [] // 예외를 허용하고 싶은 변수 이름들
      }
    ]
  }
}

const ignorePatterns = {
  name: 'ignore-patterns',
  // 목적파일을 저장하는 디렉토리를 추가
  ignores: [
    '**/*.d.ts',
    '**/*.d.mts',
    '**/*.d.cts',
    '.next',
    './src/api/Api.ts',
    'public'
  ]
}

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  functionalStyles,
  unUsedImportsStyles,
  customCodeStyles,
  ignorePatterns
]

export default eslintConfig
