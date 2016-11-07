/* eslint-disable no-console, no-use-before-define */

import path from 'path'
import Express from 'express'
import qs from 'qs'
import bodyParser from 'body-parser'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import configureStore from '../common/store/configureStore'
import Root from '../common/containers/Root'
import { fetchCounter } from '../common/api/counter'
import { match, RouterContext } from 'react-router'
import routes from '../client/routes'

import models from '../models'

const app = new Express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.post('/register', (req, res) => {
  // just cheking
  const user = models.User.build({
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@doe.com'
  });
  user.save().then(() => {
    console.log('SAVED!');
  });
  res.sendStatus(200);
})

app.use(handleRequest)

function handleRequest(req, res) {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>Ball</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `)
}

models.sequelize.sync().then(() => {
  app.listen(port, (error) => {
    if (error) {
      console.error(error)
    } else {
      console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
    }
  });
});
