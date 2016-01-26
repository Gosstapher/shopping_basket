var items = require('./items')

var basket = {
  totalBaseValue: 0,
  contents: [],
  addItem: function(){
    Array.prototype.push.apply(this.contents,items);
  } 
}
basket.addItem();
console.log(basket.contents[0].name);
module.exports = basket;