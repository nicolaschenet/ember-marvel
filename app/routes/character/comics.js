import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var characterId = this.modelFor('character').get('id');
    this.store.unloadAll('comic');
    return this.store.find('comic', {
      characters: [characterId],
      orderBy: '-focDate' 
    });
  }
});
