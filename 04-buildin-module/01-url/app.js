const url = require('url')
const log4js = require('log4js')
// const logger = log4js.getLogger()
// logger.level = 'debug'
log4js.configure({
  appenders: { cheese: { type: 'file', filename: "chees.log" } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
})
const logger = log4js.getLogger('chees')
logger.level = 'debug'

const urlString = "https://www.baidu.com:443/path/index.html?id=2#tag=3"
const urlObj = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#tag=3',
  search: '?id=2',
  query: 'id=2',
  pathname: '/path/index.html',
  path: '/path/index.html?id=2',
  href: 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
}
// console.log(url.parse(urlString))

// logger.debug(url.parse(urlString))
// logger.debug(url.format(urlObj))
// logger.debug(url.resolve('https://www.baidu.com/a', 'b'))

const urlParams = new URLSearchParams(url.parse(urlString).search)
// logger.debug(urlParams)
logger.debug(urlParams.get('id')) // 2
