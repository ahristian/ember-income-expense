import Ember from 'ember';
import category from '../models/category';


export default Ember.Controller.extend({
  queryParams: ['sort'],
  sort: null,
  sortedLineItems: Ember.computed('model', function (){
    let sort = this.get('sort');
    if(sort){
      return this.get('model').sortBy(sort);

    }

    return this.get('model');
  }),
  totalAmount: Ember.computed('model.[]', function () {
    return this.get('model').reduce((previousValue, item) => {
      return parseFloat(item.get('amount')) + previousValue;
    }, 0);
  }),
  categories: Ember.computed(function() {
    return this.get('store').findAll('category');
  }),

  actions: {
    addNewLineItem () {
      this.get('store').createRecord('line-item');
    },
    saveLineItem(model) {
      model.save();
    },
    deleteLineItem(model){
      model.destroyRecord();
    }
  }
});
