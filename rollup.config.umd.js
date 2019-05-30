import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
export default {
    input: 'src/main.ts',
    
    output: {
        name: 'igniteui-angular-wrappers',
        sourcemap:true,
        file: "dist/npm/bundles/igniteui-angular-wrappers.umd.js",
        format: 'umd'
    },
    external: [
        '@angular/core',
        '@angular/forms'
    ],
    plugins: [
    angular(
        {
            preprocessors:{
                template:template => template
            }
        }
    ),
    typescript({
         typescript:require('typescript')
    }),
    resolve({
         module: true,
         main: true
    }),
    commonjs({
         include: 'node_modules/**',
    })
    ],
    onwarn: warning => {
         const skip_codes = [
         'THIS_IS_UNDEFINED',
         'MISSING_GLOBAL_NAME'
    ];
    if (skip_codes.indexOf(warning.code) != -1) return;
        console.error(warning);
    }
};