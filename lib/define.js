/**
 * Define task
 * @function define
 * @param {Object} [options={}] - Optional settings
 * @param {Array} [options.browser] - Args for pon-task-browser
 * @param {Array} [options.react] - Args for pon-task-react
 * @param {Array} [options.css] - Args for pon-task-css
 * @param {Array} [options.map] - Args for pon-task-map
 * @param {Array} [options.ccjs] - Args for pon-task-ccjs
 * @returns {function} Defined task
 */
'use strict'

const css = require('pon-task-css')
const react = require('pon-task-react')
const browser = require('pon-task-browser')
const map = require('pon-task-map')
const ccjs = require('pon-task-ccjs')

const subPacks = { css, react, browser, map, ccjs }

/** @lends define */
function define (options = {}) {
  let subTasks = Object
    .keys(subPacks)
    .reduce((subTasks, name) => Object.assign(subTasks, {
      [name]: subPacks[ name ](...(options[ name ] || []))
    }), {})

  function task (ctx) {
    return Promise.all([
      Object.keys(subTasks).map((name) => subTasks[ name ](ctx))
    ])
  }

  return Object.assign(task, subTasks)
}

module.exports = Object.assign(define, subPacks)


