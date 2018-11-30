import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Component.extend({
  signedRequest: service(),
  s3Upload: service(),
  async uploadImage() {
    const fileName = `${get(this, 'file.name')}-${Date.now()}`
    const fileType = get(this, 'file.type')
    const signedData = await get(this, 'signedRequest').getUrl(fileName, fileType)
    await get(this, 's3Upload').uploadFile(get(this, 'file'), signedData)
    set(this, 'url', signedData.url)
  },
  actions: {
    fileLoaded(file) {
      set(this, 'file', file)
      get(this, 'uploadImage').bind(this)()
    }
  }
});
