const { require } = require('yargs');
const yargs = require('yargs');
const { addNote } = require('../utils/orders')

const command = process.argv[2];


if (command == "list") {
    console.log("All orders: ")
}
else if (command == "add") {
    console.log("Adding to order...")
    addNote(yargs.argv.order)
}
else if (command == "remove") {
    console.log("removing order item...")
}