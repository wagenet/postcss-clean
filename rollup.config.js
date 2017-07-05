/* global process */

import buble from 'rollup-plugin-buble'
import { readFileSync } from 'fs';

function inDevelopment() {
  return process.env.BUILD_ENV && ['development', 'dev', 'develop'].indexOf(process.env.BUILD_ENV.toLowerCase()) >= 0
}

const {
  main: dst,
  module: src,
  dependencies: dep
} = JSON.parse(readFileSync('./package.json', 'utf-8'))

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
