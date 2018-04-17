import fetch from 'isomorphic-fetch';

const url = 'api/toys'

//is dispatched in fetchToys() to reducer with type and payload
const getToys = toys => {
  return {
    type: 'FETCH_TOYS',
    toys
  }
}

//fetches toys from api 
//calls dispatch with arg of getToys 
//getToys receives arg of toys payload
export const fetchToys = () => {
  return dispatch => {
    return fetch(url)
      .then(res => res.json())
      .then(toys => dispatch(getToys(toys)))
  }
}



