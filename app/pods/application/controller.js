import Controller from '@ember/controller';
import { A } from '@ember/array';
import { task, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),
  heroes: A(),
  loading: false,
  search: null,
  doSearch: task(function * (value) {
    this.set('search', value);
    yield timeout(500);
    try {
      if (!value) {
        this.set('heroes', A());
        return;
      }

      let heroes = yield this.get('ajax').request(`heroes/?name=${value}`);
      this.set('heroes', heroes);
    } catch(e) {
      alert(e);
    }
  }).restartable(),
});
