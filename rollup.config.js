import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: './node_modules/deep-diff/index.js',
    output: {
      file: './deepDiff.js',
      format: 'es',
    },
    plugins: [
      resolve(),
      commonjs(),
    ],
  },
];
