import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';
export default {
    moduleName: 'FBridge',
    entry: 'src/FBridge.js',
    format: 'iife',
    plugins: [
        eslint({
            throwError: true,
            include: 'src/**',
            exclude: 'node_modules/**',
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        uglify(),
    ],
    dest: 'dist/FBridge.js',
};
