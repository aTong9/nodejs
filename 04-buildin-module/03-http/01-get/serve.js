const logger = require('../../utils/log')
const querystring = require('querystring')

const http = require('http')
const https = require('https')

const server = http.createServer((request, response) => {
  // response.writeHead(200, {
  //   'content-type': 'text/html'
  // })
  // response.write('<div>hello</div>')
  // response.write('{"xml":100}')
  // response.end()

  // const url = response.url
  // logger.debug(url)
  // let data = ''
  // request.on('data', (chunk) => {
  //   data += chunk
  // })
  // request.on('end', () => {

  // })

  https.get('https://papi.haoxinqing.cn/papi/banner/list?did=40bba6295027ab19276ad34bca915b2c&cc=pc&os=3&osv=10.15.7&ver=4.33.1&deviceId=40bba6295027ab19276ad34bca915b2c&lat=0&lon=0&net=0&na=0&platform=4&requestId=71ee3499bab09db91e7e28bd2a832392&v=20190325&t=1619054205431&position=11&docWidth=783&rootFontSize=54px&locationRoutePath=%2F&s=ea51e6ef1e3a22d5bb1ec1aee94788c0', (result) => {
    let data = ''
    result.on('data', (chunk) => {
      data += chunk
    })
    result.on('end', () => {
      response.writeHead(200, {
        'content-type': 'application/json;charset=utf-8'
      })
      // logger.debug(JSON.parse(data))
      response.write(data)
      response.end()
    })
  })

})

server.listen(8081, () => {
  console.log('localhost:8081')
})