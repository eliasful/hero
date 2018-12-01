import Component from '@ember/component';
import { inject as service } from '@ember/service';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';
import sweetErrors from 'hero/utils/sweet-errors';

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
        sweetErrors(sweetAlert, 'Não foi possível cadastar o herói!', e);
      }
    },
    async destroy(model) {
      let sweetAlert = this.get('sweetAlert');
      
      let value = await sweetAlert({
        title: 'Deseja mesmo remover esse herói?',
        text: "Essa operação não poderá ser desfeita!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, remover!',
        cancelButtonText: 'Não, cancelar!'
      });
      
      if (!value) {
        return;
      }
      
      try {
        await model.destroyRecord();
        this.get('router').transitionTo('home');
        sweetAlert('Sucesso!', 'Herói removido com sucesso!', 'success');
      } catch(e) {
        sweetErrors(sweetAlert, 'Não foi possível remover o herói!', e);
      }
    }
  }
});
