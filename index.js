const path = require('path');
const baseReport = require('./report/base.report');

module.exports = (pluginOptions) => {
	let options = pluginOptions || {};
	let report = options.report || baseReport;
	let exclude = options.exclude || [];

	return {
		name: "rollup-plugin-reporter",

		ongenerate(data) {
			if (exclude.some(item => data.file.includes(item))) {
				return;
			}

			let bundle = path.relative(process.cwd(), data.file);
			let bundleSizes = {original: 0, rendered: 0};

			let modules = Object.keys(data.bundle.modules).map(modulePath => {
				let module = data.bundle.modules[modulePath];
				let relPath = path.relative(process.cwd(), modulePath);

				let size = {
					original: module.originalLength,
					rendered: module.renderedLength
				};

				bundleSizes.original += size.original;
				bundleSizes.rendered += size.rendered;

				return {
					path: relPath,
					size
				};
			});

			report({
				bundle,
				size: bundleSizes,
				modules
			});
		}
	};
};