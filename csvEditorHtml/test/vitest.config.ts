import { defineConfig } from 'vitest/config'

export default defineConfig({

  test: {
    browser: {
      enabled: true,
      headless: true,
      screenshotFailures: false,
      name: 'chromium',
      provider: 'playwright',
      testerScripts: [
        {
          src: './node_modules/dayjs/dayjs.min.js',
          type: 'text/javascript',
        },
        {
          src: './node_modules/dayjs/plugin/customParseFormat.js',
          type: 'text/javascript',
        },
        {
          src: './thirdParty/big.js/big.min.js',
          type: 'text/javascript',
        },
        {
          src: './thirdParty/toFormat/toFormat.min.js',
          type: 'text/javascript',
        },
        {
          src: './thirdParty/regression/regression.min.umd.js', //our regression uses big.js
          type: 'text/javascript',
        },
        {
          src: './csvEditorHtml/util.ts',
          type: 'text/javascript',
        },
        {
          src: './csvEditorHtml/autoFill.ts',
          type: 'text/javascript',
        },
        {
          content: `
          window.numbersStyleEnRadio = {
            checked: true
          }
          //add toFormat to big numbers
          toFormat(Big)
          `,
          type: 'text/javascript',
        },

        
      ],
    },
    include: ['csvEditorHtml/test/**/*.test.ts'],
  },
})