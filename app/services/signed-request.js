import Service from '@ember/service';
import environment from 'hero/config/environment';
import { inject as service } from '@ember/service';

export default Service.extend({
  ajax: service(),
  cookies: service(),
  async getUrl(fileName, fileType) {
    const csrf = this.get('cookies').read('csrftoken');
    const url = `${environment.apiBaseUrl}s3/signed-url/`
    const params = {
      headers: {
        'X-CSRFToken': csrf,
        'csrf_token': csrf,
      },
      data: {
        key: fileName
      },
      file: fileName,
      type: fileType
    };
    
    let data = await this.get('ajax').post(url, params);
    if (data.errors) {
      return data.errors;
    }
    
    return data;
  }
});
