import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser'

const umdName = '@mint-editor/core';
const dir = 'dist'

export default [
    {
        input: 'src/index.ts',
        // ignore lib
        external: [],

        output: [
            {
                file: dir + '/index.umd.js',
                format: 'umd',
                sourcemap: true,
                name: umdName,
            },
            {
                file: dir + '/index.umd.min.js',
                format: 'umd',
                sourcemap: true,
                name: umdName,
                plugins: [terser()],
            },
            {
                file: dir + '/index.cjs.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: dir + '/index.cjs.min.js',
                format: 'cjs',
                sourcemap: true,
                plugins: [terser()],
            },
            {
                file: dir + '/index.esm.js',
                format: 'es',
                sourcemap: true,
            },
            {
                file: dir + '/index.esm.min.js',
                format: 'es',
                sourcemap: true,
                plugins: [terser()],
            },
        ],
        plugins: [
            nodeResolve(),
            commonjs({ exclude: 'node_modules/**' }),
            typescript({ tsconfig: './tsconfig.json', declaration: false }),
            peerDepsExternal(),
        ],

        treeshake: true,
    }, {
        input: './src/index.ts',
        output: [{
            file: dir + '/index.d.ts',
            format: 'es',
        }],
        plugins: [dts()]
    }
];