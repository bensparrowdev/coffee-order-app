const { require } = require('yargs');
const yargs = require('yargs');
const { addOrder, listOrders, removeOrder } = require('../utils/orders')

const command = process.argv[2];


if (command == "list") {
    console.log("All orders: ");
    listOrders();
}
else if (command == "add") {
    console.log("Adding to order...");
    addOrder(yargs.argv.order);
}
else if (command == "remove") {
    console.log("removing order item...");
    removeOrder(yargs.argv.order)
}