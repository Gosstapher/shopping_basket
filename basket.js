var items = require('./items')

var basket = {
  totalBaseValue: 0,
  totalFinalValue: 0,
  contents: [],
  addItem: function(item){
    this.contents.push(item);
    this.totalBaseValue += item.price;
  },
  calculateTotalFinalValue: function(){
    if(this.totalBaseValue <= 19.99){
      this.totalFinalValue = this.totalBaseValue;
    }
    else if(this.totalBaseValue >= 20.00){
      this.totalFinalValue = (this.totalBaseValue * .9)
    }

  } 

}
basket.addItem(items[0]);
basket.addItem(items[0]);
basket.addItem(items[1]);
basket.addItem(items[2]);
basket.addItem(items[3]);
console.log(basket.contents);
console.log(basket.totalBaseValue);
basket.calculateTotalFinalValue();
console.log(basket.totalFinalValue);
module.exports = basket;