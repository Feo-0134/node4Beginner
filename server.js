var http = require("http");
var url = require("url");

function start(router, handle) {
	function onRequest (request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("request for" + pathname + " received.")
		router(handle, pathname, response, request)
		// request.setEncoding("utf8");

		// request.addListener("data", function(postDataChunk) {
		// 	postData += postDataChunk;
		// 	console.log("Received POST data chunk '" + postDataChunk + "'.")
		// })

		// request.addListener("end", function() {
		// 	router(handle, pathname, response, postData);
		// })
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server start at 8888")
}

exports.start = start