import AjaxService from 'ember-ajax/services/ajax';
import environment from 'heros/config/environment';

export default AjaxService.extend({
  host: environment.apiBaseUrl
});
