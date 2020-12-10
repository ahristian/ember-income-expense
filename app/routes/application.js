import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel() {
    return this.get('session').fetch().catch(function () {});
    },

  actions: {
    logout () {
      return this.get('session').close();
    },
    async login () {
      let email = this.controllerFor('application').get('userEmail'),
        password = this.controllerFor('application').get('userPassword');
      this.get('torii').open('firebase', {
        provider: 'password',
        email: email,
        password: password
      }).then(function (data) {
        console.log(data.currentUser);
      })
    }
  }
});
