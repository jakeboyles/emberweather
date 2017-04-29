import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		hoveringOverTheMotherFucka(data){
			console.log(Ember.get(data,'description'))
		}
	}
});
