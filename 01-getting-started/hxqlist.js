const https = require('https')

https.get('https://papi.haoxinqing.cn/papi/doctor/list',(res) => {
  console.log(res)
  let str = ''
  res.on('data', (chunk) =>{
    str += chunk
  })
  res.on('end', () => {
    console.log(str)
  })
})