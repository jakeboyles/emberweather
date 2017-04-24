import Ember from 'ember';

export default Ember.Route.extend({

	model(params) {
		  let zip = params.zipcode || 'Cincinnati';
		  Ember.set(this,'zip',zip);
      return this.store.query('weather',zip);
  	},

  	actions:{
  		updateZip(model){
        Ember.set(this,'zip',model.zip);
  			this.controller.set('model', this.store.query('weather',Ember.get(this,'zip')));
  		}
  	}
});
