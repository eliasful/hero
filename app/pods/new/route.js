import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('hero');
  },
  actions: {
    save(model) {
      model.save();
      this.transitionTo('home');
    }
  }
});
