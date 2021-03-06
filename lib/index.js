/**
 * Task set for web
 * @module pon-task-web
 * @version 10.4.1
 */

'use strict'

const define = require('./define')

let lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
