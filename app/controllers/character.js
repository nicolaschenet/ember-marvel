import Ember from 'ember';

export default Ember.ObjectController.extend({
  thumbnailURL: function () {
    var thumbnail = this.get('thumbnail');
    if (!thumbnail) {
      return false;
    }
    return thumbnail.path + '.' + thumbnail.extension;
  }.property('thumbnail')
});
