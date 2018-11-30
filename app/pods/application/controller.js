import Controller from '@ember/controller';
import { A } from '@ember/array';
import { task, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),
  heros: A(),
  loading: false,
  search: null,
  doSearch: task(function * (value) {
    this.set('search', value);
    yield timeout(500);
    try {
      if (!value) {
        this.set('heros', A());
        return;
      }

      let heros = yield this.get('ajax').request(`heros/?name=${value}`);
      this.set('heros', heros);
    } catch(e) {
      alert(e);
    }
  }).restartable(),
});
