import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

const dist = 'dist';

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: 'cjs',
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: 'esm',
    },
    {
      name: 'youtubeApiSearchReloaded',
      file: `${dist}/bundle.umd.js`,
      format: 'umd',
    },
  ],
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    json(),
  ],
};
