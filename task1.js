function lcs(str) {
  if (str.length === 0) {
    return ""
  }
  let bs = str[0]
  let lss = ""
  for (let i = 0; i < bs.length; i++) {
    for (let j = i + 1; j <= bs.length; j++) {
      let ss = bs.slice(i, j)
      if (str.every(s => s.includes(ss))) {
        if (ss.length > lss.length) {
          lss = ss
        }
      }
    }
  }
  return lss;
}
const args = process.argv.slice(2)
console.log(lcs(args))
