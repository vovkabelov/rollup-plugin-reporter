const onGenerate = require('../app/handlers/ongenerate.handler');
const assert = require('assert');

describe('onGenerate handler', () => {
	let mockData = {
		file: 'test.bundle.js',
		bundle: {
			modules: {
				'/test/module1.js': {
					originalLength: 100,
					renderedLength: 50
				},
				'/test/module2.js': {
					originalLength: 100,
					renderedLength: 50
				},
				'/test/module3.js': {
					originalLength: 100,
					renderedLength: 50
				}
			}
		}
	};


	it('Should be a function', () => {
		assert(typeof onGenerate === 'function');
	});

	it('Should return new function', () => {
		assert(typeof onGenerate({exclude: [], report: () => {}}) === 'function');
	});

	describe('Call with custom report function', () => {
		it('Should be called custom report function', () => {
			let report = () => {
				assert(true);
			};

			onGenerate({exclude: [], report: report})(mockData);
		});

		it('Should be called with correctly data object', () => {
			let report = (data) => {
				assert(typeof data === 'object');
				assert(data.bundle === mockData.file);

				assert(typeof data.size === 'object');
				assert(typeof data.size.original === 'number');
				assert(typeof data.size.rendered === 'number');
				assert(data.size.original === 300);
				assert(data.size.rendered === 150);

				assert(Array.isArray(data.modules));
				assert(data.modules.length === 3);

				data.modules.forEach((module, index) => {
					assert(typeof module === 'object');
					assert(module.path.includes(`/test/module${index+1}.js`));
					assert(typeof module.size === 'object');
					assert(module.size.original === 100);
					assert(module.size.rendered === 50);
				});
			};

			onGenerate({exclude: [], report: report})(mockData);
		});
	});
});