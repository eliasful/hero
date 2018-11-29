import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  classNames: ['row'],
  actions: {
    favorite(hero) {
      set(hero, 'favorite', true);
      hero.save();
      this.refresh();
    }
  }
});
