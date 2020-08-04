var http = require('http')
const bl = require('bl')
var content = []
var i = 0
function httpGet (j) {
	http.get(process.argv[2+j], function (response) {
	response.pipe(bl(function(err, data) {
		if (err) return console.error(err)
			content[j] = data.toString()
		i++
		if (i==3)
			for (k=0; k<3; k++)
				console.log(content[k])
	}))
})
}
for (k=0; k<3; k++)
httpGet(k)