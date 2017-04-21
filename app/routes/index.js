import Ember from 'ember';

export default Ember.Route.extend({

	model(params) {
		let zip = params.zipcode || '45011';
		Ember.set(this,'zip',zip);
    	return Ember.$.getJSON(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${zip}&mode=JSON&units=imperial&cnt=7&apikey=d0458c4189cf033bf80c84d7a0d38ab0`);
  	},

  	actions:{
  		updateZip(model){
  			Ember.set(this,'zip',model.zip);
  			Ember.$.getJSON(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${Ember.get(this,'zip')}&mode=JSON&units=imperial&cnt=7&apikey=d0458c4189cf033bf80c84d7a0d38ab0`)
		    .then((result) => {
		       this.controller.set('model', result)
		    });
  		}
  	}
});
