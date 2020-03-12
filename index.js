let driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
   let newDriver =  Object.assign({}, driver, { [key]: value })
   return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, {[key]: value})
};

function  deleteFromDriverByKey(driver, key) {
    let newDriver = Object.assign({}, driver)
    delete newDriver[key]
    return newDriver;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver;
};