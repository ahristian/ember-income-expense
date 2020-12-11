import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),
  beforeModel() {
  return this.get('session').fetch().catch(function() {});
},
model () {
      return this.get('store').findAll('line-item');
},
actions: {
  login() {
    let email = this.controllerFor('application').get('userEmail'),
      password = this.controllerFor('application').get('userPassword');
    this.get('session').open('firebase',
      {
        provider: 'password',
        email: email,
        password: password
      }).then(function(data) {
      console.log(data.currentUser);
    });
  },
  logout() {
    this.get('session').close();
  }
}
});
