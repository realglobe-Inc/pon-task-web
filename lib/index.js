/**
 * Task set for web
 * @module pon-task-web
 * @version 8.2.0
 */

'use strict'

const define = require('./define')

let lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
