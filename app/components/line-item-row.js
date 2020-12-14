
import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'tr',
  classNameBindings: ['isExpense:expense:bg-info'],
  isExpense: Ember.computed('model.isExpense', function (){
    return this.get('model.isExpense');
  }),
  actions: {
    changeCategory(model, category) {
      model.set('category', category);
    },
    saveModel(){
      this.get('saveRecord')(this.get('model'));
    },
    destroyRecord(){
      this.get('destroyRecord')(this.get('model'));
    }
  }
});
