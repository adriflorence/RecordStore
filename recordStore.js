// Create a Record Store that has a Name, City and an Inventory.
// Give the Record Store a Balance.
// Add some Records to the Store's Inventory.

const _ = require("lodash");

const RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.till = 1000.00;
  this.inventory = [];
}

RecordStore.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

RecordStore.prototype.removeRecord = function (record) {
  if(this.inventory.includes(record)){
    let index = this.inventory.indexOf(record);
    this.inventory.splice(index, 1);
  }
};

RecordStore.prototype.sellRecord = function (record) {
  if(this.inventory.includes(record)){
    this.removeRecord(record);
    this.till += record.price;
  }
};

RecordStore.prototype.totalValueOfRecords = function () {
  return _.sumBy(this.inventory, "price");
  // Math.round(num * 100) / 100
};

RecordStore.prototype.financialReport = function () {
  return `Balance: ${this.till.toFixed(2)} and value of records: ${this.totalValueOfRecords().toFixed(2)}`
};


RecordStore.prototype.returnAllByGenre = function (genre) {
    return _.filter(this.inventory, ['genre', genre]);
};

module.exports = RecordStore;
