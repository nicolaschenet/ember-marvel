import Ember from 'ember';

export default Ember.View.extend({
  willInsertElement: function () {
    Ember.$(document).on('scroll', Ember.$.proxy(this.onScroll, this));
  },

  willDestroyElement: function () {
    Ember.$(document).off('scroll', Ember.$.proxy(this.onScroll, this));
  },

  onScroll: function (event) {
    var $loadmore = this.$('#loadmore');
    if (!$loadmore.length) {
      return;
    }
    var shouldLoadMore = $loadmore.offset().top <= $(window).scrollTop() + $(window).height();
    this.get('controller').set('shouldLoadMore', shouldLoadMore);
  }
});
