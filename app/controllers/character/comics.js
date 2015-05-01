import Ember from 'ember';

export default Ember.Controller.extend({
  metadata: function () {
    return this.store.metadataFor('comic');
  }.property()
});
