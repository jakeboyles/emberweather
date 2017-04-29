import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host:`http://api.icndb.com/`,
	urlForQuery(query){
		return `${this.host}jokes/random?firstName=Jake&lastName=Boyles`;
	}
});

