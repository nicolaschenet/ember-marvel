import DS from 'ember-data';
import Ember from 'ember';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizePayload: function (payload) {
    return {
      character: payload.data.results
    };
  }
});
