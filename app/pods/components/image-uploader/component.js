import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';

export default Component.extend(SweetAlertMixin, {
  aws: service(),
  async uploadImage() {
    let sweetAlert = this.get('sweetAlert');
    sweetAlert('Carregando a imagem...');
    sweetAlert.showLoading();
    
    const file = get(this, 'file');
    try {
      let data = await get(this, 'aws').uploadImage(file);
      set(this, 'url', data.Location);
    } catch(e) {
      sweetAlert('Ops!', 'Não foi possível atualizar a imagem!', 'warning');
    } finally {
      sweetAlert.close();
    }
  },
  actions: {
    fileLoaded(file) {
      set(this, 'file', file)
      get(this, 'uploadImage').bind(this)()
    }
  }
});
