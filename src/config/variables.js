
const fontSizeBase = 16;
const lineHeightBase = 24;

const variables = {

    color: 'red',

    // fontSize: {

    //     base:   px(fontSizeBase),

    //     sml:    px(fontSizeBase * 0.75),
    //     med:    variables.fontSize.base,
    //     lrg:    px(fontSizeBase * 1.25)
    // },

    fontSizeBase:   px(fontSizeBase),

    fontSizeSml:    px(fontSizeBase * 0.75),
    fontSizeMed:    px(fontSizeBase),
    fontSizeLrg:    px(fontSizeBase * 1.25),

    fontFamilySans: 'sans-serif',

    spacing: {

        xxs:    px(lineHeightBase * 0.125),
        xsm:    px(lineHeightBase * 0.25),
        sml:    px(lineHeightBase * 0.5),
        med:    px(lineHeightBase),
        lrg:    px(lineHeightBase * 2),
        xlr:    px(lineHeightBase * 4),
        xxl:    px(lineHeightBase * 8)
    },

    containers: {

        sml:    px(1000),
        med:    px(1200),
        lrg:    px(1400)
    }
};

module.exports = variables;

function px(value) {

    return `${value}px`;
}
