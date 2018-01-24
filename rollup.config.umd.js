import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
export default {
    entry: 'src/igniteui.angular2.ts',
    format: 'umd',
    moduleName: 'igniteui-angular-wrappers',
    sourceMap:true,
    external: [
        '@angular/core',
        '@angular/forms'
    ],
    dest: "dist/npm/bundles/igniteui-angular-wrappers.umd.js",
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