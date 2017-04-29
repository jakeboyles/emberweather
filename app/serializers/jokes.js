import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

	normalizeResponse (store, primaryModelClass, payload){

		return {
			data:payload.value.map(item=>{
				return {
					id:item.id,
					type:'jokes',
					attributes: {
						joke:item.joke
					}
				}
			})
		}
	}
});
