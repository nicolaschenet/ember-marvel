import Ember from 'ember';

export default Ember.Controller.extend({

  metadata: function () {
    return this.store.metadataFor('character');
  }.property(),

  offset: Ember.computed.alias('metadata.offset'),
  limit: Ember.computed.alias('metadata.limit'),
  count: Ember.computed.alias('metadata.count'),
  total: Ember.computed.alias('metadata.total'),

  page: function () {
    return (this.get('offset') / this.get('limit')) + 1;
  }.property('offset', 'limit'),

  nbPages: function () {
    return Math.ceil(this.get('total') / this.get('limit'));
  }.property('total', 'limit'),

  onLastPage: function () {
    return this.get('page') === this.get('nbPages');
  }.property('page', 'nbPages'),

  loadmoreLabel: function () {
    return this.get('isLoadingMore') ? 'Loading more characters...' : 'Load more characters';
  }.property('isLoadingMore'),


  shouldLoadMoreDidChange: function () {
    if (!this.get('shouldLoadMore')) {
      return;
    }
    this.send('loadmore');
  }.observes('shouldLoadMore'),


  filterDidChange: function () {
    this.send('updateCharactersFilter', this.get('charactersFilter'));
  }.observes('charactersFilter'),


  actions: {
    loadmore: function () {
      var charactersFilter = this.get('charactersFilter'),
          offset = this.get('offset') + this.get('limit'),
          options = { offset : offset };

      if (this.get('charactersFilter')) {
        options = Ember.merge(options, {
          nameStartsWith: charactersFilter
        });
      }
      this.send('fetchCharacters', options);
    }
  }



});
