'use strict'

/* global process */

import babel from 'rollup-plugin-babel';

const inDevelopment = () => process.env.BUILD_ENV && ['development', 'dev', 'develop'].indexOf(process.env.BUILD_ENV.toLowerCase()) >= 0

const babelOpts = {
  presets: ['es2015-rollup'],
  exclude: 'node_modules/**'
}

const rollupOpts = {
  entry: 'index.m.js',
  format: 'cjs',
  plugins: [ babel(babelOpts) ],
  dest: 'index.js'
}

if (inDevelopment()) {
  rollupOpts.sourceMap = 'inline'
}

export default rollupOpts
