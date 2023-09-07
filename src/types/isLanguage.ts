import { Language } from 'prism-react-renderer';

export const isLanguage = (value: unknown): value is Language => {
  if (typeof value !== 'string') return false;

  // 対応している言語は以下参照
  // https://mantine.dev/others/prism/?t=props
  return [
    'markup',
    'bash',
    'clike',
    'c',
    'cpp',
    'css',
    'javascript',
    'jsx',
    'coffeescript',
    'actionscript',
    'css-extr',
    'diff',
    'git',
    'go',
    'graphql',
    'handlebars',
    'json',
    'less',
    'makefile',
    'markdown',
    'objectivec',
    'ocaml',
    'python',
    'reason',
    'sass',
    'scss',
    'sql',
    'stylus',
    'tsx',
    'typescript',
    'wasm',
    'yaml',
  ].includes(value);

};