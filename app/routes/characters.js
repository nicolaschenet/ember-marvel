import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var _this = this,
        charactersFilter = this.get('charactersFilter');
    if (!Ember.isEmpty(charactersFilter)) {
      return this.store.find('character', {
        nameStartsWith: charactersFilter
      });
    }
    return this.store.find('character');
  },

  actions: {
    updateCharactersFilter: function (charactersFilter) {
      this.set('charactersFilter', charactersFilter);
      Ember.run.cancel(this.charactersFilterTimeout);
      this.charactersFilterTimeout = Ember.run.later(this, function () {
        this.refresh();
      }, 500);
    },

    fetchCharacters: function (options) {
      var controller = this.get('controller');
      controller.set('isLoadingMore', true);
      this.store.find('character', options).then(function () {
        controller.set('isLoadingMore', false);
        controller.notifyPropertyChange('metadata');
      });
    }

  }
});
