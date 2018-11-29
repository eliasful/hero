import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
  heros: A(),
  search: null,
  actions: {
    // clearAndTransition() {
    //   this.set('search', null);
    //   this.transitionToRoute('hero.new');
    // }
  }
});
