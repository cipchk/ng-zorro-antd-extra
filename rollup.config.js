const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');

const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/router': 'ng.router',
    '@angular/forms': 'ng.forms',
    '@angular/common/http': 'ng.common.http',

    'ng-zorro-antd': 'ngZorro.antd',

    'rxjs/observable/fromEvent': 'Rx.Observable'
};

module.exports = {
    sourcemap: true,
    rollup: require('rollup'),
    context: 'this',
    name: 'ngZorro.antd_extra',
    output: 'ng-zorro-antd-extra.umd.js',
    format: 'umd',
    plugins: [
        replace({ "import * as moment": "import moment" }),
        resolve({
            jsnext: true,
            main: true
        })
    ],
    external: Object.keys(globals),
    globals: globals
};
