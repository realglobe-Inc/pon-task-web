/**
 * Task set for web
 * @module pon-task-web
 * @version 5.0.8
 */

'use strict'

const define = require('./define')

let lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
