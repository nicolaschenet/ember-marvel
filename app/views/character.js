import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function () {
    Ember.run.scheduleOnce('afterRender', function () {
      Ember.$('ul.tabs').tabs();
    })
  }
});
