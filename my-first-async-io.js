var fs = require('fs')
var lines = undefined

function getLines(callback) {
  fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
    lines = fileContents.split('\n').length - 1
    callback()
  })
}

function logLines() {
  console.log(lines)
}

function magicNumber() {
  var number = +process.argv[3]
  if (lines >= number){
    console.log('This file has '+number+ ' or more lines')
  } else {
    console.log('This file does not have '+number+' or more lines')
  }
}

getLines(logLines)
getLines(magicNumber)