// Write your solution in this file!

const driver = {};
// defines object

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]:value});
}
//returns a driver with the original key value pairs and the new key value pair
//it does not modify the original driver, but rather returns a clone with the new data

// function nameoffunction(object, key, value) {
//     return Object.assign({}, object, {[key]:value});
// }

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}
// ✓ updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
  }
//   ✓ deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
//   ✓ does not modify the original driver (it is non-destructive)

function destructivelyDeleteFromDriverByKey(driver, key) {
delete driver[key]; 
return driver;
}
// returns driver without the delete key/value pair
//  modifies the original driver