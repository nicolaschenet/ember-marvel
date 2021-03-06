import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  extractMeta: function (store, type, payload) {
    if (payload && payload.data) {
      store.typeMapFor(type).metadata = Ember.Object.create({
        count: payload.data.count,
        limit: payload.data.limit,
        offset: payload.data.offset,
        total: payload.data.total
      });
    }
  }
});
