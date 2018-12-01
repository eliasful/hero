import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Component.extend({
  aws: service(),
  async uploadImage() {
    const file = get(this, 'file');
    try {
      let data = await get(this, 'aws').uploadImage(file);
      set(this, 'url', data.Location);
    } catch(e) {
      alert(e);
    }
  },
  actions: {
    fileLoaded(file) {
      set(this, 'file', file)
      get(this, 'uploadImage').bind(this)()
    }
  }
});
