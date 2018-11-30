import DRFAdapter from './drf';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';

export default DRFAdapter.extend({
  pathForType(type) {
    let underscored = underscore(type);
    if (underscored === 'hero') {
      underscored = 'heroes'
    }
    return pluralize(underscored);
  }
});
