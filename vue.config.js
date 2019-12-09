const sass = require('node-sass');
const sassUtils = require('node-sass-utils')(sass);

const variables = require('./src/config/variables');

module.exports = {

    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    functions: {
                        'var($keys)': (keys) => {

                            keys = keys.getValue().split('.');

                            let result = variables;

                            for (let i = 0; i < keys.length; i++) {

                                result = result[keys[i]];

                                if (typeof result === 'string') {
                                    result = convertStringToSassDimension(result);
                                } else if (typeof result === 'object') {
                                    Object.keys(result).forEach(function(key) {
                                        const value = result[key];
                                        result[key] = convertStringToSassDimension(value);
                                    });
                                }
                            }

                            result = sassUtils.castToSass(result);

                            return result;
                        }
                    }
                }
            }
        }
    },

    configureWebpack: {
        module: {
            rules: [

                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader'
                }
            ]
        }
    },

    //  Prevent SVG processing with file-loader (this is default vue-cli behaviour)
    chainWebpack: config => {
        config.module
            .rule('svg')
            .test(() => false)
            .use('file-loader')
    }
}

function convertStringToSassDimension(result) {

    if (typeof result !== 'string') {
        return result;
    }

    const cssUnits = [
        'rem',
        'em',
        'vh',
        'vw',
        'vmin',
        'vmax',
        'ex',
        '%',
        'px',
        'cm',
        'mm',
        'in',
        'pt',
        'pc',
        'ch'
    ];

    const parts = result.match(/[a-zA-Z]+|[0-9]+/g);
    const value = parts[0];
    const unit = parts[parts.length - 1];

    if (cssUnits.indexOf(unit) !== -1) {

        result = new sassUtils.SassDimension(parseInt(value, 10), unit);
    }

    return result;
}
