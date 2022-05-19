const { invoke } = require('./app');
const { program } = require('commander');

program
    .option('-a, --action <type>', 'action to do with product')
program.parse(process.argv);

const options = program.opts();

invoke(options);
