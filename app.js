const yargs = require('yargs');
const geocode = require('./geocode.js');
const argv = yargs
            .options({
                a: {
                    demand: true,
                    alias: 'address',
                    describe: 'address to describe',
                    string: true
                }
            })
            .help()
            .alias('help' , 'h')
            .argv;

geocode.getLocation(argv.address)
.then(data => console.log(data[1]))
.catch(err => console.log(err))

