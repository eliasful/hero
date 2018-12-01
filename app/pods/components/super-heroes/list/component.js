import Component from '@ember/component';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  classNames: ['row'],
  actions: {
    async favorite(hero) {
      if (hero.id) {
        hero = this.get('store').peekRecord('hero', hero.id);
      }

      set(hero, 'favorite', true);      
      await hero.save();
      this.refresh();
    }
  }
});
