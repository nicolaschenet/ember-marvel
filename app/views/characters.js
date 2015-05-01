import Ember from 'ember';

export default Ember.View.extend({

  willInsertElement: function () {
    // Ember.$(document).on('scroll', Ember.$.proxy(this.onScroll, this));
  },

  willDestroyElement: function () {
    Ember.$(document).off('scroll', Ember.$.proxy(this.onScroll, this));
  },

  didInsertElement: function () {
    Ember.$(window).scrollTop(0, 0);
  },

  onScroll: function () {
    var $loadmore = this.$('#loadmore');
    if (!$loadmore.length) {
      return;
    }
    var shouldLoadMore = $loadmore.offset().top <= Ember.$(window).scrollTop() + Ember.$(window).height();
    this.get('controller').set('shouldLoadMore', shouldLoadMore);
  }
  
});
