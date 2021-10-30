const tsNode = require('ts-node');
require('jsdom-global/register');
tsNode.register({
    files: true,
    transpileOnly: true,
    project: './tests/tsconfig.test.json'
});