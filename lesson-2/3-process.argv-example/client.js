const { invoke } = require('./app');

const args = process.argv.slice(2);

const indexAction = args.indexOf('--action');
const valueIndex = args[indexAction + 1];


if(indexAction !== -1) {
    invoke({action: valueIndex});
}

