import DS from 'ember-data';
import moment from 'moment';

export default DS.JSONAPISerializer.extend({
	normalizeResponse (store, primaryModelClass, payload){
		return {
			data:payload.list.map((day,idx)=>{
				return {
					id:idx, // Laz E
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
	}
});
