const path = require('path');

const onGenerate = ({exclude, report}) => {
	return (data) => {
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

module.exports = onGenerate;