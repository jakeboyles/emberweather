import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
  		clickItem(data){
  			console.log(data)
  		}
  	}
});
