import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('hero');
  },
  actions: {
    destroy(hero) {
      hero.destroyRecord().then(() => {
        this.refresh();
      });
    }
  }
});
