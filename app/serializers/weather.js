import DS from 'ember-data';
import moment from 'moment';

export default DS.JSONAPISerializer.extend({
	normalizeResponse (store, primaryModelClass, payload, id, requestType){
		console.log(payload)
		let data = {
			data:payload.list.map((day,idx)=>{
				return {
					id:idx,
					type:"weather",
					attributes:{
						date:moment(day.dt*1000).format('dddd'),
						max:day.temp.max,
						min:day.temp.min,
						description:day.weather[0].description,
						lat:payload.city.coord.lat,
						long:payload.city.coord.lon,
					}
				}
			})
		}
		return data;
	}
});
