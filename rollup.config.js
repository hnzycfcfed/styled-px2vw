import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import pkg from './package.json';

const plugins = [
    babel(),
    eslint()
];

export default [
    {
        input: 'index.js',
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ],
        plugins,
        external: ['styled-components']
    }
];
