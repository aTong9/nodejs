>[nodejs文档](https://lurongtao.gitee.io/felixbooks-gp19-node.js/basics/01-Node.js基础.html)

>[代码地址](https://gitee.com/lurongtao/felixlu-course-gp21/tree/master/)

node package versions
- 13.4.6
- major: 13, minor: 4, patch: 6 (打补丁，奇数不稳定，偶数稳定)
  # npm版本号
  - ^ ： 锁定major
  - ~ ： 锁定minor
  - 空 ：锁定patch
  - \* ：最新版本
  
  npm 清除缓存
  - npm cache clean --force


# node 的浏览器端调试

  - `node --inspect --inspect-brk serve.js`
  
    chrome浏览器输入：chrome://inspect/#devices

## node进程管理工具
- supervisor
- nodemon
- forever
- pm2