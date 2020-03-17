// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driverObject, key, value) {
    let newDriverObject = Object.assign({}, driverObject, { [key]: value });
    return newDriverObject;
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
    driverObject[key] = value;
    return driverObject;
}

function deleteFromDriverByKey(driverObject, key) {
    let newDriverObject = Object.assign({}, driverObject);
    delete newDriverObject[key];
    return newDriverObject;
}

function destructivelyDeleteFromDriverByKey(driverObject, key) {
    delete driverObject[key];
    return driverObject;
}