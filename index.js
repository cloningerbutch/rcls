const chalk = require('chalk');
const colorizer = require('json-colorizer');
const pkg = require('./package.json');
const yargs = require('yargs');

const Services = {
    logobj: function(o){
        console.log(colorizer(o,
            {
                pretty:true,
                colors: {
                    STRING_KEY: 'green',
                    STRING_LITERAL: 'yellowBright'
                }
            }
        ));
    }
}

var argv = yargs
    .usage('Usage: $0 <appname> [options]')
    .help('h')
    .alias('h','help')
    .option('app',{
        alias: 'a',
        description: 'app name'
    })
    .argv;

if (!argv.app){
    argv.app = argv._[0]
}
if (!argv.app){
    yargs.showHelp();
    process.exit(1);
}

var cfg = require('rc')(argv.app);
var files = JSON.parse(JSON.stringify(cfg.configs));
delete cfg.configs;
delete cfg.config;
delete cfg._;

console.log(chalk.green('rc files found, in order of precedence:'))
files.reverse();
files.forEach(file => {
    console.log(`  ${file}`)
})
console.log(chalk.green('Composite options:'))
Services.logobj(cfg);
