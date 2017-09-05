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
var axios = require('axios')
var cheerio = require('cheerio')

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

//代理获取列表
apiRoutes.get('/recommendList',(req,res) =>{
  var url = 'http://m.ac.qq.com/Recommend/get/';
  axios.get(url, {
    headers:{
      referer:'http://m.ac.qq.com/',
      host: 'm.ac.qq.com'
    },
    params: req.query
  }).then((responent) =>{
    res.json(responent.data)
  }).catch((e) =>{
    console.log(e);
  })
})
//使用爬虫获取详情页面详细信息
apiRoutes.get('/recommendLi',(req,res) =>{
  var url = 'http://m.ac.qq.com/comic/index/id/'+ req.query.id;
  axios.get(url).then((responent) =>{
    var $ = cheerio.load(responent.data);
    var obj = {}
    obj.title = $('.top-title')[0].children[0].data
    obj.img = $('.head-info-cover>img')[0].attribs.src
    obj.grade = $('.head-info-grade')[0].children[0].data
    obj.author = $('.head-info-author')[0].children[0].data
    obj.number = $('.info-number')[0].children[0].data
    obj.summary = $('.detail-summary>p')[0].children[0].data
    obj.time = $('.comicList-info-time')[0].children[0].data
    obj.update = $('.comicList-info-update')[0].children[0].data
    obj.tags = []
    for(var i = 0; i<$('.head-info-tags>span').length;i++) {
      obj.tags.push($('.head-info-tags>span')[i].children[0].data)
    }
    res.json(obj)
  })
})
//获取月票信息代理
apiRoutes.get('/getMonthTicketInfo',(req,res) =>{
  var url = 'http://m.ac.qq.com/comic/getMonthTicketInfo'
  axios.get(url, {
    headers:{
      referer:'http://m.ac.qq.com/',
      host: 'm.ac.qq.com'
    },
    params: req.query
  }).then((responent) =>{
    res.json(responent.data)    
  }).catch((e) =>{
    console.log(e);
  })
})
//获取留言的数目
apiRoutes.get('/getCommentList', (req,res) =>{
  var id = req.query.id
  var url = 'http://m.ac.qq.com/comment/getCommentList/id/' + id
  axios.get(url, {
    headers:{
      referer:'http://m.ac.qq.com/',
      host: 'm.ac.qq.com'
    },
    params: {
      t: 1504532449464,
      page: req.query.page,
      pageSize:10
    }
  }).then((responent) =>{
    res.json(responent.data)
  }).catch((e) =>{
    console.log(e)
  })
})

apiRoutes.get('/acindex',(req,res)=>{
  if(req.query.req == 1) {
    res.json({
      isSuccess : true,
      data : acindex
    });
  } else {
    res.json({
      isSuccess : false,
      msg: "请求错误"
    });
  }
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
