import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
  afterModel() {
    this.transitionTo('home');
  },
  actions: {
    willTransition() {
      let application = this.controllerFor('application');
      set(application, 'search', null);
    },
    refreshModel() {
      this.modelFor('home').refresh();
    }
  }
});
