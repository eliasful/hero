import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  ajax: service(),
  model() {
    return hash({
      favorites: this.get('ajax').request('heros/favorites/'),
      heros: this.store.query('hero', {
        favorite: 0
      })
    });
  },
  actions: {
    destroy(hero) {
      hero.destroyRecord().then(() => {
        this.refresh();
      });
    },
    refreshModel() {
      this.refresh();
    }
  }
});
