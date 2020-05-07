import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import babel from 'rollup-plugin-babel';
// import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
  },
  plugins: [
    commonjs(),
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    builtins(),
    globals(),
    babel({exclude: 'node_modules/**',  runtimeHelpers: true}),
    json()
  ]
}
