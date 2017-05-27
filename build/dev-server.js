require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

var appData = require('../data.json');
var acindex = appData.acindex;
var Comic000 = appData.Comic000;
var Comic001 = appData.Comic001;
var Comic002 = appData.Comic002;
var Comic003 = appData.Comic003;
var Comic004 = appData.Comic004;
var Comic005 = appData.Comic005;

var apiRoutes = express.Router();
apiRoutes.get('/acindex',(req,res)=>{
  res.json({
    mes:1,
    data:acindex
  });
});

apiRoutes.get('/000',(req,res)=>{
  res.json({
    mes:1,
    data:Comic000
  });
});

apiRoutes.get('/001',(req,res)=>{
  res.json({
    mes:1,
    data:Comic001
  });
});

apiRoutes.get('/002',(req,res)=>{
  res.json({
    mes:1,
    data:Comic002
  });
});

apiRoutes.get('/003',(req,res)=>{
  res.json({
    mes:1,
    data:Comic003
  });
});

apiRoutes.get('/004',(req,res)=>{
  res.json({
    mes:1,
    data:Comic004
  });
});

apiRoutes.get('/005',(req,res)=>{
  res.json({
    mes:1,
    data:Comic005
  });
});

app.use('/api',apiRoutes);


var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
