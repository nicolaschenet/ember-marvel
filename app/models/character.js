import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  thumbnail: DS.attr(),
  modified: DS.attr('date'),
  resourceURI: DS.attr('string'),
  urls: DS.attr(),
  comics: DS.attr(),
  events: DS.attr(),
  series: DS.attr()
});
