/**
 * Test case for define.
 * Runs with mocha.
 */
'use strict'

const define = require('../lib/define.js')
const ponContext = require('pon-context')
const { ok } = require('assert')
const co = require('co')

describe('define', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Define', () => co(function * () {
    let ctx = ponContext()
    let task = define({})
    ok(task)
    ok(task.css)
    ok(task.react)
    ok(task.browser)
    ok(task.map)
    ok(task.ccjs)
  }))
})

/* global describe, before, after, it */
