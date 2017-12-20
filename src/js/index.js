import './../css/style.scss'

const foo = 'foo'
const bar = 'bar'
console.log(`log: ${foo}${bar}`)

const obj = {
  'a': 'aaa',
  'b': 'bbb'
}

const _obj = Object.assign({}, obj, {
  'a': 'AAA',
  'c': 'CCC'
})
console.log(obj)
console.log(_obj)