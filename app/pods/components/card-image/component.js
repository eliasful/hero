import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  tagName: '',
  url: computed('image', function() {
    let image = this.get('image');
    return htmlSafe(`background-image: url('${image}')`);
  })
});
