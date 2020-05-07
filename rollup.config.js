import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import babel from 'rollup-plugin-babel';
// import pkg from './package.json';
import axios from 'axios';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  external: ['axios'],
  plugins: [
    commonjs({
      browser: false,
      namedExports: {
        'axios': ['axios']
      }
    }),
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
