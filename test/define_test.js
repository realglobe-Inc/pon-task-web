/**
 * Test case for define.
 * Runs with mocha.
 */
'use strict'

const define = require('../lib/define.js')
const ponContext = require('pon-context')
const {ok} = require('assert')

describe('define', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Define', async () => {
    let ctx = ponContext()
    let task = define({
      browser: ['src.js', 'bundle.js']
    })
    ok(task)
    ok(task.css)
    ok(task.react)
    ok(task.browser)
    ok(task.map)
    ok(task.ccjs)
  })
})

/* global describe, before, after, it */
