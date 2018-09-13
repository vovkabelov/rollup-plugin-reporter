const colors = require('colors');
const filesize = require('filesize');

const baseReport = data => {
	console.log(`Bundle created ${data.bundle}`.green);

	data.modules.forEach(module => {
		console.log(` + ${module.path}`);
	});
};

module.exports = baseReport;