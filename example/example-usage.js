'use strict'

const pon = require('pon')
const { css, react, browser, map } = require('pon-task-web')

async function tryExample () {
  let run = pon({
    'ui:css': css('ui/stylesheets', 'public/css', { pattern: '*.css' }),
    'ui:react': react('ui', 'shim', { pattern: '+(components|wrappers)/**/*.jsx' }),
    'ui:browser': browser('ui/entrypoints', 'public/js'),
    'ui:map': map('public/js', 'public/js')
  })

  // Run all compile and then, start watching
  run('ui:*', 'ui:*/watch')
}

tryExample()
