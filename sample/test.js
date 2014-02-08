var xml2json = require('../')

xml2json({
	input: './sample/sample2.xml',
	output: './sample/test.json'
}, function(err, result) {
  
	if(err) {
		console.error(err);
	} else {
		console.log(result);
	}
  
});
