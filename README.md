# rollup-plugin-reporter
Custom reports for Rollup

## Install via NPM 
    npm install rollup-plugin-reporter --save-dev
    
## Install via Yarn 
    yarn add rollup-plugin-reporter --dev
    
## Use with base report 
    import reporter from 'rollup-plugin-reporter';
    
    module.exports = {
        ...
        plugins: [
            reporter()
        ]
        ...
    }
    
## Custom report
    import reporter from 'rollup-plugin-reporter';
    
    const customReport = data => {
        console.log('${data.bundle} [${data.size.rendered}]');
    }
    
    module.exports = {
            ...
            plugins: [
                reporter({
                    report: customReport
                })
            ]
            ...
        }
    