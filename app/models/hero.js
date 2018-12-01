import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  photo: DS.attr('string', {
    defaultValue: '/images/hero-no-image.jpg'
  }),
  favorite: DS.attr('boolean', {
    defaultValue: false
  })
});
