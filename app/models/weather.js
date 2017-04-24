import DS from 'ember-data';

export default DS.Model.extend({
	max:DS.attr('Number'),
	min:DS.attr('Number'),
	description:DS.attr("String"),
	lat:DS.attr("Number"),
	long:DS.attr("Number"),
	date:DS.attr("String")
});


