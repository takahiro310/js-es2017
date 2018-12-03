console.log("********************************")
console.log("* Null object pattern")
console.log("********************************")
const nullObjectPattern = (hoge = {fuga: () => {}}) => {
  hoge.fuga()
  console.log("hoge.fuga() ok")
}

console.log("********************************")
console.log("* Array Test")
console.log("********************************")
const arr = [0, 1, 2]
console.log(arr.length)
console.log(Array.isArray(arr))

console.log("********************************")
console.log("** RegExp Test")
console.log("********************************")
const re = /^Ja(.+)Script$/
console.log(re.test('JapariScript'))
console.log(re.test('JapariPark'))

const match = re.exec('JavaScript')
console.log(match)

console.log("********************************")
console.log("* Exception")
console.log("********************************")
hoge = () => {
  throw new Error('hoge')
}

try {
  hoge()
} catch(e) {
  console.log(e)
} finally {
  console.log('finally')
}

console.log("********************************")
console.log("* Class")
console.log("********************************")
class Foo {
  constructor(param = 'default string') {
    this.param = param
  }
  
  print() {
    console.log(this.param)
  }
  
  static sayHello() {
    console.log('hello')
  }
}

const foo = new Foo()
foo.print()
Foo.sayHello()

console.log("********************************")
console.log("* Promise")
console.log("********************************")
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 1000)
})

p.then(() => console.log('done'))

console.log("********************************")
console.log("* Async/Await")
console.log("********************************")
const fs = require('fs')

const fileRead = filename => new Promise((resolve, reject) => {
  fs.readFile(filename, (err, content) => {
    err ? reject(err) : resolve(content)
  })
})

const fileWrite = (filename, content) => new Promise((resolve, reject) => {
  fs.writeFile(filename, content, err => {
    err ? reject(err) : resolve()
  })
})

const copy = async(src, dest) => {
  const content = await fileRead(src)
  await fileWrite(dest, content)
}

copy('src/takahiro310/src.md', 'src/takahiro310/dest.md')
  .then(() => console.log('copy done'))

