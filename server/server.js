/* eslint-disable no-console, no-use-before-define */

import path from 'path'
import Express from 'express'
import qs from 'qs'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config'
import routes from './routes'
import models from './models'

const app = new Express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Use this middleware to set up hot module reloading via webpack.
if (process.env.NODE_ENV === 'production') {
  webpack(webpackConfig).run((err, stats) => {
    if (err) {
      console.log(err)
    }

    console.log(stats.toString(webpackConfig))
  })
} else {
  const compiler = webpack(webpackConfig)
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }))
}

routes(app)

app.use('/dist', Express.static(path.join(__dirname, '../dist')))
app.use('/static', Express.static(path.join(__dirname, '../static')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

models.sequelize.sync().then(() => {
  app.listen(port, (error) => {
    if (error) {
      console.error(error)
    } else {
      console.info(`==> 🌎  Listening on port ${port}.`)
    }
  })
})
