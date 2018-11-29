import TextField from '@ember/component/text-field';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default TextField.extend({
  ajax: service(),
  tagName: 'input',
  placeholder: 'Procurando um herói?',
  async keyUp() {
    try {
      let value = this.get('value');
      if (!value) {
        this.set('heros', A());
        return;
      }
      
      let heros = await this.get('ajax').request(`heros/?name=${value}`);
      this.set('heros', heros);
    } catch(e) {
      alert(e);
    }
  }
});
