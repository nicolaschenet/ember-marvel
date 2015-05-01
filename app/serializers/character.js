import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload: function (payload) {
    return {
      character: payload.data.results
    };
  },

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
