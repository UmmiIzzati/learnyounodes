const http = require('http')
const map = require('through2-map')
var server = http.createServer(function (inStream, outStream) {
	if (inStream.method != 'POST')
		return outStream.end('only POST requests')
inStream.pipe(map(function(chunk) {
	return chunk.toString().toUpperCase()
})).pipe(outStream)
})
server.listen(Number(process.argv[2]))