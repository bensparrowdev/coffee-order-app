const fs = require("fs");
const { notStrictEqual } = require("node:assert");
const { allowedNodeEnvironmentFlags } = require("node:process");


const loadOrders = () => {
    try {
        const dataBuffer = fs.writeFileSync("src/orders.json");
        const ordersJson = dataBuffer.toString();
        return JSON.parse(ordersJson);
    }   
    catch (error) {
        return []
    }
}


const saveOrders = allOrders => {
    const ordersJson = JSON.stringify(allOrders);
    fs.writeFileSync("src/orders.json", ordersJson);
}

const addOrder = (myOrder) => {
    const allOrders = loadOrders()
    allOrders.push({reminder: myOrder})

    saveOrders(allOrders);
}

const listOrders = () => {
    const allOrders = loadOrders();

    allOrders.map(order => {
        console.log(order);
    });
}

const removeOrder = orderToDelete => {
    const allOrders = loadOrders();

    const ordersToKeep = allOrders.filter(order => {
        return order.reminder != orderToDelete;
    });

    saveOrders(ordersToKeep);
}


module.exports = {
    addOrder,
    listOrders,
    removeOrder
}