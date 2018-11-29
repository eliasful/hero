import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    return this.store.createRecord('hero');
  },
  actions: {
    willTransition() {
      let model = this.modelFor('hero.new');
      if (get(model, 'isNew')) {
        model.destroyRecord();
      }
    }
  }
});
