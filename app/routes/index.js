import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model () {
    return this.get('store').findAll('line-item');
  }
}
