import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  photo: DS.attr('string'),
  favorite: DS.attr('boolean', {
    default: false
  }),
  image: computed('photo', function() {
    if (this.get('photo')) {
      return this.get('photo');
    } else {
      return '/images/hero-no-image.jpg';
    }
  }),
});
