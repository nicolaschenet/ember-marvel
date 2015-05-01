import DS from 'ember-data';
import Ember from 'ember';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  normalizePayload: function (payload) {
    var comics = payload.data.results;
    this.store.modelFor('comic').eachRelationship(function (relation) {
      comics.forEach(function (comic) {
        comic[relation] = comic[relation].items.map(function (item) {
          return parseInt(item.resourceURI.split('/').get('lastObject'));
        })
      });
    });
    return {
      comics: comics
    };
  }
});
