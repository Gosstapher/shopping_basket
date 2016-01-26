var assert = require('assert');
var basket = require('./basket');
var items = require('./items');


describe("Shopping Basket", function(){
// 1. An empty shopping basket should have a total value of 0
  it("An empty shopping basket should have a total value of 0", function(){
    assert.equal(0,basket.totalValue)
  });
});