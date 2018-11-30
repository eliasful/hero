import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  tagName: '',
  actions: {
    async save(model) {
      try {
        await model.save();
        this.get('router').transitionTo('home');
      } catch(e) {
        alert(e);
      }
    },
    async destroy(model) {
      if (!confirm('Deseja mesmo remover esse herói?')) {
        return;
      }
      
      try {
        await model.destroyRecord();
        this.get('router').transitionTo('home');
      } catch(e) {
        alert(e);
      }
    }
  }
});
