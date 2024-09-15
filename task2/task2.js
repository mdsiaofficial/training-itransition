const fs = require('fs')
const crypto = require('crypto')
const path = require('path')

// read file
// fs.readFile('./README.md', 'utf-8', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })

// const data = fs.readFileSync('./README.md', 'utf-8')
// console.log(data)

// function md5checksum(str) {
//   return crypto.createHash('md5').update(str).digest('hex')
// }

// function sha256checksum(str) {
//   return crypto.createHash('sha-256').update(str).digest('hex')
// }

// function sha3256checksum(str) {
//   return crypto.createHash('sha3-256').update(str).digest('hex')
// }

// const mystr = "hi, ashiq"
// const checksum = md5checksum(mystr)
// console.log(checksum)
// console.log(sha256checksum(mystr))
// console.log(sha3256checksum(mystr))

// here //

function calc_sha3_256(file) {
  const data = fs.readFileSync(file)
  return crypto.createHash('sha3-256').update(data).digest('hex')
}

function executeProcess(dirPath, email) {
  const fileNames = fs.readdirSync(dirPath)
  if (fileNames.length !== 256) throw new error

  let hashes = fileNames.map(fileName => {
    const filePath = path.join(dirPath, fileName)
    return calc_sha3_256(filePath)
  })
  hashes.sort()

  const concateall = hashes.join('')
  const resStr = concateall + email.toLowerCase()
  const finalHash = crypto.createHash('sha3-256').update(resStr).digest('hex')

  return finalHash
}

const dirPath = './files'
const email = 'mdsiaofficial@gmail.com'
const finalHash = executeProcess(dirPath, email)
console.log(finalHash)
