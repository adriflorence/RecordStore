// Create a Record object that has an Artist, Title, Genre, and Price

const _ = require("lodash");

const Record = function(artist, title, year, genre, price){
  this.artist = artist;
  this.title = title;
  this.year = year;
  this.genre = genre;
  this.price = price;
}

Record.prototype.displayInfo = function () {
  return `${this.title} by ${this.artist}, ${this.year}, ${this.genre}, price: £${this.price.toFixed(2)}`  // fixes flout to 2 decimals
};

// Record.prototype.listInventory = function () {
//
// };

module.exports = Record;
