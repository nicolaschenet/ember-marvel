import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizePayload: function (payload) {
    return {
      character: payload.data.results
    };
  }
});
