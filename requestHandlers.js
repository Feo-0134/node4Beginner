var exec = require('child_process').exec;
var querystring = require("querystring")
var fs = require('fs')
var util = require('util');
var formidable = require("formidable");

function sleep(milliSecondes) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSecondes);
}

function start0(response, postData) {
	console.log("Request handler 'hello' was called.")

	exec("ls -lah", function (error, stdout, stderr) {
		// sleep(100000)
	    response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write(stdout);
	    response.end();
	});
}

function start(response) {
	console.log("Request handler 'upload' was called.")
	
	var body = '<html>' +
	'<head>' +
	'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
	'</head>' +
	'<body>' +
	'<form action="/upload" enctype="multiple/form-data" method="post">' +
	'<input type="file" name="upload" multiple = "multiple">'+
	'<input type="submit" value="upload" />' +
	'</form>' + 
	'</body>' +
	'</html>'

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(err, fields, files) {
  	  console.log(request.data)
  	  // fs.renameSync(files.upload.path, "/tmp/test.png");
      response.writeHead(200, {'content-type': 'text/plain'});
      response.write('received upload:\n\n');
      response.end(util.inspect({fields: fields, files: files}));
    });
}

function show(response) {
	console.log("Response handler 'show' was called. ");
	fs.readFile ("/tmp/test.png", "binary", function(error, file) {
		if(error) {
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(error + "\n");
			response.end();
		} else {
			response.writeHead(200, {"Content-Type": "image/png"})
			response.write(file, "binary");
			response.end();
		}
	})
}

exports.start = start
exports.upload = upload
exports.show = show
