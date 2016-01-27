var items = require('./items')

var basket = {
  totalBaseValue: 0,
  // totalReductionValue:0,
  totalFinalValue: 0,
  contents: [],
  bogofArray: [],
  addItem: function(item, amount){
    this.contents.push(item);
    this.totalBaseValue += (item.price * amount);
    item.amount = amount;
  },

  calculateBogofReduction: function(){
    for(item in this.contents){
      if(item.bogof === true){
        this.bogofArray.push(item)
      }
    }
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
// basket.addItem(items[0], 2);
// basket.addItem(items[1], 1);
// basket.addItem(items[2], 3);
// basket.addItem(items[3], 5);
// basket.calculateBogofReduction();
// console.log(basket.contents);
// console.log(basket.bogofArray);
// console.log(basket.totalBaseValue);
// basket.calculateTotalFinalValue();
// console.log(basket.totalFinalValue);
module.exports = basket;