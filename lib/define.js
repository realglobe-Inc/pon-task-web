/**
 * Define task
 * @function define
 * @param {Object} [options={}] - Optional settings
 * @param {Object} [options.browser] - Options for pon-task-browser
 * @param {Object} [options.react] - Options for pon-task-react
 * @param {Object} [options.css] - Options for pon-task-css
 * @param {Object} [options.map] - Options for pon-task-map
 * @returns {function} Defined task
 */
'use strict'

const css = require('pon-task-css')
const react = require('pon-task-react')
const browser = require('pon-task-browser')
const map = require('pon-task-map')

const subPacks = { css, react, browser, map }

/** @lends define */
function define (options = {}) {
  let subTasks = Object
    .keys(subPacks)
    .reduce((subTasks, name) => Object.assign(subTasks, {
      [name]: subPacks[ name ](options[ name ])
    }), {})

  function task (ctx) {
    return Promise.all([
      Object.keys(subTasks).map((name) => subTasks[ name ](ctx))
    ])
  }

  return Object.assign(task, subTasks)
}

module.exports = Object.assign(define, subPacks)


