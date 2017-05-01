import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

	normalizeResponse (store, primaryModelClass, payload){
		console.log(payload.value.length);
		if(!payload.value.length)
		{
			let item = payload.value;
			return {
				data:{
						id:item.id,
						type:'jokes',
						attributes: {
							joke:item.joke
						}
					}
				}
		}
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
