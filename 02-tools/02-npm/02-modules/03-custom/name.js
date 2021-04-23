const name = {
  name: '张三',
  say() {
    console.log(this.name)
  }
}
const age = {
  age: 10
}
// const exports = module.exports
// exports.name = name
// exports.age = age
// or
module.exports = {
  name,
  age
}
