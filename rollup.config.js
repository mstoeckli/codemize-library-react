import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';

/** @desc Import package file as a JavaScript variable for referring to different properties */
const oPackage = require('./package.json');

/** @esc The entrypoint for our library (input) is the index.ts file in the src directory which exports all of our
 *       components. We will be distributing both ES6 and commonJS modules so the consumers of our library can choose
 *       which type work best for them. We also invoke three of our four plugins on the first of two configuration
 *       objects on the exported array. This first configuration defines how the actual Javascript code of our library
 *       is generated. The second configuration object defines how our libraries types are distributed and uses the
 *       dts plugin to do so. */
export default [{
    input: "src/index.ts",
    output: [{
        file: oPackage.main,
        format: "cjs",
        sourcemap: true
    }, {
        file: oPackage.module,
        format: "esm",
        sourcemap: true
    }],
    external: ["styled-components"],
    globals: {
        "styled-components": "styled"
    },
    plugins: [
        // babel({
        //     babelHelpers: 'bundled',
        //     exclude: 'node_modules/**',
        //     presets: ['@babel/preset-env','@babel/preset-react']
        // }),
        typescript({
            tsconfig: "./tsconfig.json"
        }),
        resolve(),
        commonjs(),
        terser()
    ],
}, {
    input: "dist/esm/types/index.d.ts",
    output: [{
        file: "dist/index.d.ts",
        format: "esm"
    }],
    plugins: [dts()]
}];