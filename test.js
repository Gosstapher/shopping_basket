var assert = require('assert');
var basket = require('./basket');
var items = require('./items');


describe("Shopping Basket", function(){
  // 1. An empty shopping basket should have a total value of 0
  it("An empty shopping basket should have a total value of 0", function(){
    assert.equal(0, basket.totalFinalValue)
  });
  // 2. An empty shopping basket should have 0 contents 
  it("An empty shopping basket should have 0 contents", function(){
    assert.equal(0, basket.contents.length)
  });
  // 3. A basket with items with a combined value over 20.00 should have it's total value reduced by 10%
  it("A basket with items with a combined value over 20.00 should have it's total value reduced by 10%", function(){
    basket.addItem(items[3]);
    basket.calculateTotalFinalValue();
    var expectedValue = (basket.totalBaseValue * 0.9);
    assert.equal(expectedValue, basket.totalFinalValue);
  });
});

