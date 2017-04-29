import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host:`http://api.openweathermap.org/data/2.5/forecast/`,
	urlForQuery(query){
		return `${this.host}daily?q=${query}&mode=JSON&units=imperial&count=7&apikey=d0458c4189cf033bf80c84d7a0d38ab0`;
	}
});

