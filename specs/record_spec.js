const _ = require("lodash");

const assert = require("assert");
const Record = require("../record");

describe("Record", function(){

  let record1, record2, record3, record4, record5, record6, record7, record8, record9, record10, record11, record12, record13, record14, record15, record16, record17, record18, record19, record20;

  beforeEach(function(){
    record1 = new Record("Bob Seger", "Night Moves", 1976, "Rock", 14.99);
    record2 = new Record("LCD Soundsystem", "American Dream", 2017, "Electronic", 19.99);
    record3 = new Record("David Bowie", "The Rise and Fall of Ziggy Stardust and the Spiders from Mars", 1972, "Glam Rock", 15.59);
    record4 = new Record("It's Immaterial", "Life's hard and Then You Die", 1986, "New Wave", 30.00);
    record5 = new Record("Emancipator", "Soon It Will Be Cold Enough to Build Fires", 2006, "Trip Hop", 35.00);
    record6 = new Record("The War On Drugs", "A Deeper Understanding", 2017, "Indie Rock", 18.99);
    record7 = new Record("Kajagoogoo", "White Feathers", 1983, "Electro Pop", 37.99);
    record8 = new Record("Public Service Broadcasting", "Every Valley", 2017, "Post-Rock", 22.49);
    record9 = new Record("The Stone Roses", "The Stone Roses", 1989, "Rock", 21.00);
    record10 = new Record("Neneh Cherry", "Raw Like Sushi", 1989, "Dance Pop", 22.49);
    record11 = new Record("Erasure", "I Say I Say I Say", 1994, "Electro Pop", 17.50);
    record12 = new Record("Oasis", "Definitely Maybe", 1994, "Rock", 2.50);
    record13 = new Record("Faithless", "No Roots", 2004, "Electronic", 11.50);
    record14 = new Record("Future Islands", "Singles", 2014, "Indie Pop", 14.50);
    record15 = new Record("Bruce Springsteen", "Nebraska", 1982, "Rock", 27.99);
    record16 = new Record("Daft Punk", "Discovery", 2001, "Electronic", 1.99);
    record17 = new Record("Radiohead", "The Bends", 1995, "Indie Rock", 100.00);
    record18 = new Record("The Decemberists", "The Crane Wife", 2006, "Indie Rock", 20.00);
    record19 = new Record("David Bowie", "Aladdin Sane", 1973, "Glam Rock", 47.00);
    record20 = new Record("Noel Gallagher's High Flying Birds", "Who Built The Moon?", 2017, "Rock", 25.99);
  });

  it('should have an artist', function(){
    assert.strictEqual(record3.artist, "David Bowie");
  });

  it('should have a title', function(){
    assert.strictEqual(record12.title, "Definitely Maybe");
  });

  it('should be able to display properties as a String', function(){
    const actual = `Life's hard and Then You Die by It's Immaterial, 1986, New Wave, price: £30.00`;
    assert.strictEqual(record4.displayInfo(), actual);
  });

});
