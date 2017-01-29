exports.config = {
    baseUrl: 'http://localhost:8080/',
    framework: 'jasmine',
    directConnect: true,
    specs: [
        'e2e/**/*.e2e.ts'
    ],
    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 30000
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['show-fps-counter=true']
        }
    },
    plugins: [
        { package: 'aurelia-protractor-plugin' }
    ],
    onPrepare: function () {
        require('ts-node').register({
            compilerOptions: {
                module: 'commonjs'
            },
            disableWarnings: true,
            fast: true
        });
    }
};
