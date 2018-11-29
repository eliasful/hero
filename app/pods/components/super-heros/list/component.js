import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  classNames: ['row'],
  actions: {
    async favorite(hero) {
      set(hero, 'favorite', true);
      await hero.save();
      this.refresh();
    }
  }
});
