import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment.js';

export default DS.RESTAdapter.extend({
  namespace: 'v1/public',
  host: 'http://gateway.marvel.com',
  ajaxOptions: function(url, type, options) {
    options = options || {};
    options.data = Ember.merge({
      apikey: config.APP.API_KEY
    }, options.data);
    return this._super(url, type, options);
  }
});
