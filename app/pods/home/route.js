import Route from '@ember/routing/route';

export default Route.extend({
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
