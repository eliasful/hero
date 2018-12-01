import AjaxService from 'ember-ajax/services/ajax';
import environment from 'hero/config/environment';

export default AjaxService.extend({
  host: environment.APP.API_HOST
});
