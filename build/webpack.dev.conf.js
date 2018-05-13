'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

var express = require('express')
var axios = require('axios')
var cheerio = require('cheerio')
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
let indexMsg = ''
app.use('/api',apiRoutes);

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(apiRoutes) {
      //代理获取列表
      apiRoutes.get('/api/recommendList',(req,res) =>{
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
      // 爬取首页信息
      apiRoutes.get('/api/index', (req, res) => {
        var url = 'http://m.ac.qq.com'
        axios.get(url).then((responent) => {
          indexMsg = responent.data
          res.json({state: 1})
        })
      })
      // 使用爬虫获取首页详细信息
      apiRoutes.get('/api/banner', (req, res) => {
        var $ = cheerio.load(indexMsg)
        var list = []
        $('.banner-list li').each(function (item) {
          let obj = {}
          let pic = $(this)
          let pic_href = pic.find('a').attr('href').substring(pic.find('a').attr('href').lastIndexOf('/')+1)
          obj.pic_href = pic_href.length == 6?pic_href : ''
          obj.imgSrc = pic.find('img').attr('src')
          list.push(obj)
        })
        res.json(list)  
      })
      //使用爬虫获取详情页面详细信息
      apiRoutes.get('/api/recommendLi',(req,res) =>{
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
      apiRoutes.get('/api/getMonthTicketInfo',(req,res) =>{
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
      apiRoutes.get('/api/getCommentList', (req,res) =>{
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
      apiRoutes.get('/api/acindex',(req,res)=>{
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
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
