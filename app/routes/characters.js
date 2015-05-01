import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    var charactersFilter = this.get('charactersFilter');

    this.store.unloadAll('character');

    if (!Ember.isEmpty(charactersFilter)) {
      return this.store.find('character', {
        nameStartsWith: charactersFilter
      });
    }
    return this.store.find('character');
  },

  setupController: function (controller, model) {
    controller.setProperties({
      model: model,
      loading: false
    });
    controller.notifyPropertyChange('metadata');
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
      this.store.find('character', options).then(function (characters) {
        controller.set('isLoadingMore', false);
        controller.get('model').addObjects(characters.toArray());
        controller.notifyPropertyChange('metadata');
      });
    },

    loading: function () {
      this.controllerFor('characters').set('loading', true);
    }
  }
});
