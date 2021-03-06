# rollup-plugin-reporter
[![Build Status](https://travis-ci.org/vovkabelov/array.find.svg?branch=master)](https://travis-ci.org/vovkabelov/array.find) 
[![Maintainability](https://api.codeclimate.com/v1/badges/fda4c9e4b9f25f49b2b6/maintainability)](https://codeclimate.com/github/vovkabelov/rollup-plugin-reporter/maintainability) 
[![Coverage Status](https://coveralls.io/repos/github/vovkabelov/rollup-plugin-reporter/badge.svg?branch=master)](https://coveralls.io/github/vovkabelov/rollup-plugin-reporter?branch=master)
[![npm version](https://badge.fury.io/js/rollup-plugin-reporter.svg)](https://badge.fury.io/js/rollup-plugin-reporter)  
Custom reports for Rollup

## How it works 
**1.** Install npm package via npm `npm i rollup-plugin-reporter` or via yarn `yarn add rollup-plugin-reporter`  
**2.** Add plugin call into Rollup config, to plugins sections 
```javascript
// rollup.config.js
import reporter from 'rollup-plugin-reporter';

module.exports = {
    ...,
    plugins: [
        reporter()
    ],
    ...
}
```
    
## Make custom report 
The custom report function will be called with a single `data` parameter.

```javascript
// rollup.config.js
import reporter from 'rollup-plugin-reporter';

module.exports = {
    ...,
    plugins: [
        reporter({
            report: data => {
                console.log(`${data.bundle} [${data.size.rendered}]`);
            }
        })
    ],
    ...
}
```
## Structure of `data` object
```javascript
{
    // Relative path to bundle file 
    bundle: String,
    
    // Bundle size
    size: {
        original: Number, 
        rendered: Number
    },
    
    // List of modules included in current bundle
    modules: Array<String>
}
```

## Plugin options
```javascript
{
    // Excluded bundles from report 
    exclude: Array<String>,
    
    // Custom report function
    report: Function 
}
```

## Copyright and license
Code and documentation copyright 2018 Vladimir Belov. Code released under the [MIT license](https://github.com/vovkabelov/rollup-plugin-reporter/blob/master/LICENSE).