import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('characters');
  this.route('character', {
    path: 'characters/:character_id'
  }, function() {
    this.route('comics');
    this.route('events');
    this.route('series');
  });
});

export default Router;
