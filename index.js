const onGenerate = require('./app/handlers/ongenerate.handler');
const baseReport = require('./report/base.report');

const defaultOptions = {
	report: baseReport,
	exclude: []
};

module.exports = (pluginOptions) => {
	let options = Object.assign({}, defaultOptions, pluginOptions || {});

	return {
		name: "rollup-plugin-reporter",
		onwrite: onGenerate(options)
	};
};