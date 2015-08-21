import Ember from 'ember';

export default Ember.ArrayController.extend({

  // Here, we're telling the controller that the property `page`
  // should be "bound" to the query parameter the same name.
  // We could map the parameter to a different property name if we wanted.
  queryParams: [
    'page',
    'q'
  ],

  // defaults
  page: 1,
  q: null,
  perPage: 10,

  // These properties will be set by the parent route
  totalCount: null,
  count: null,

  // The following properties will be used for the display of the pagination links
  totalPages: function() {
    return Math.ceil(this.get('totalCount') / this.get('perPage'));
  }.property('page'),

  prevPage: function() {
    return this.get('page') - 1;
  }.property('page'),

  nextPage: function() {
    return this.get('page') + 1;
  }.property('page'),

  isFirstPage: function() {
    return this.get('page') === 1;
  }.property('page'),

  isLastPage: function() {
    return this.get('page') >= this.get('totalPages');
  }.property('page', 'totalPages'),

  pageRange: function () {
    var result = Ember.A();

    for(var i = 1; i <= this.get('totalPages'); i++) {
      if (i < 10) {
        result.push(i);
      }
    }

    return result;
  }.property('totalPages')

});
