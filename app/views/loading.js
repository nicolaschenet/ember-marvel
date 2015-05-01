import Ember from 'ember';

export default Ember.View.extend({

  didInsertElement: function () {
    Ember.$(window).scrollTop(0, 0);
  }

});
