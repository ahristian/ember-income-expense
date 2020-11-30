import Ember from 'ember';

let LineItem = Ember.Object.extend({
  description: 'Some text',
  date: new Date(),
  amount: 0,
  isExpense: true
})

export default Ember.Controller.extend({
  totalAmount: Ember.computed('model.[]', function () {
return this.get('model').reduce((previousValue, item) =>
{
  return parseFloat(item.get('amount')) + previousValue;
}, 0);
  }),

  actions: {
    deleteLineItem(lineItem){
      lineItem.destroyRecord();
    },
    addNewLineItem () {
      let lineItem = this.get('store').createRecord('line-item', {
        description: this.get('newDescription'),
        date: new Date(this.get('newDate')),
        amount: this.get('newAmount'),
        isExpense: this.get('newIsExpense')
      });
      lineItem.save();
      /*let newLineItem = LineItem.create({
        description: this.get('newDescription'),
        date: this.get('newDate'),
        amount: this.get('newAmount'),
        isExpense: this.get('newIsExpense')
      });*/
      this.get('lineItems').pushObject(newLineItem);
      this.setProperties({
        newDescription: '',
        newDate: '',
        newAmount: '',
        newIsExpense: '',
      })
    }
  }
 /* lineItemsOutput: Ember.computed('lineItems.[]', function () {
    let lineItems = this.get('lineItems'),
      output = '';
    lineItems.forEach((item) => {
      output += `Description: ${item.get('description')}-`;
      output += `Date: ${item.get('date')}-`;
      output += `Amount: ${item.get('amount')}-`;
      output += `Expense: ${item.get('isExpense')}`;
    });
    return output;
  })*/
});
