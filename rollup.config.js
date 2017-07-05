'use strict'

/* global process */

import buble from 'rollup-plugin-buble'
import { sync as pkg } from 'read-pkg'

function inDevelopment() {
  return process.env.BUILD_ENV && ['development', 'dev', 'develop'].indexOf(process.env.BUILD_ENV.toLowerCase()) >= 0
}

const {
  main: dst,
  module: src,
  dependencies: dep
} = pkg('./package.json')

const rollupOpts = {
  entry: src,
  format: 'cjs',
  external: Object.keys(dep),
  plugins: [
    buble({
      include: src,
      transforms: { dangerousForOf: true }
    })
  ],
  dest: dst
}

if (inDevelopment()) {
  rollupOpts.sourceMap = 'inline'
}

export default rollupOpts
