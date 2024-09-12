const fs = require('fs')
const crypto = require('crypto')
const path = require('path')

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

const dirPath = '../task2'
const email = 'mdsiaofficial@gmail.com'
const finalHash = executeProcess(dirPath, email)
console.log(finalHash)
