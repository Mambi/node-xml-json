var fs = require('fs'),
	path = require('path'),
	xml2js = require('xml2js')

var parser = new xml2js.Parser();
	
exports = module.exports = xml2json;

function xml2json (config, callback) {
	if(!config.input) {
		console.error("You miss a input file");
		process.exit(1);
	}

	var cv = new CV(config, callback);
	        
}

function CV(config, cb) {
	
	this.load(config.input, function(result) {
		cb(null, result)			
	});


}

// loading xml
CV.prototype.load = function(input, cb) {
	var resolve = path.resolve(input);

	fs.readFile(resolve, {encoding: 'UTF-8'}, function(err, data) {
		if (err) throw new Error(err);
		parser.parseString(data, function (err, result) {
			if(err) throw new Error(err);	

			cb(result)
		});
	});

}
