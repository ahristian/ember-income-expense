import Ember from 'ember';

let LineItem = Ember.Object.extend({
  description: 'Some text',
  date: new Date(),
  amount: 0,
  isExpense: true
})

export default Ember.Controller.extend({
  totalAmount: Ember.computed('lineItems.[]', function () {
    return this.get('lineItems').reduce((previousValue, item) =>
    {
      return parseFloat(item.get('amount')) + previousValue;
    }, 0);
  }),
  lineItems: [
    LineItem.create({description: 'Rent payment', date: new Date(2020, 12, 29), amount: 1000}),
    LineItem.create({description: 'Food', date: new Date(2020, 12, 30), amount: 1200}),
    LineItem.create({description: 'Insurance', date: new Date(2020, 12, 3), amount: 250}),
    LineItem.create({description: 'Salary', date: new Date(2020, 12, 3), amount: 2250, isExpense:false})
  ],
  actions: {
    addNewLineItem () {
      let newLineItem = LineItem.create({
        description: this.get('newDescription'),
        date: this.get('newDate'),
        amount: this.get('newAmount'),
        isExpense: this.get('newIsExpense')
      });
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
