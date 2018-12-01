import Component from '@ember/component';
import { inject as service } from '@ember/service';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';

export default Component.extend(SweetAlertMixin, {
  router: service(),
  tagName: '',
  actions: {
    async save(model) {
      let sweetAlert = this.get('sweetAlert');
      try {
        await model.save();
        this.get('router').transitionTo('home');
        sweetAlert('Sucesso!', 'Herói cadastrado com sucesso!', 'success');
      } catch(e) {
        let errors = '';
        e.errors.forEach(error => {
          let split = error.source.pointer.split('/');
          let field = split[split.length - 1];
          let message = error.detail;
          errors += `${field}: ${message}<br>`;
        });
        sweetAlert('Ops!', 'Não foi possível cadastrar o herói!<br>' + errors, 'warning');
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
