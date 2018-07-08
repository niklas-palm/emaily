import axios from 'axios';
import { FETCH_USER } from './types';

// The actioncreator is an arrow function, that returns an async arrowfunction
// so that we can dispatch actions async.
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};

export const handleToken = token => async dispatch => {
	const res = await axios.post('/api/stripe', token);

	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};

//The above is equivalent to:
// export const fetchUser = () => {
// // The actioncreator returns a function, so that we can dispatch actions async.
// return function(dispatch) {
// 	axios.get('/api/current_user').then(res =>
// 		dispatch({
// 			type: FETCH_USER,
// 			payload: res.data
// 		})
// 	);
// };
