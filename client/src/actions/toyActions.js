import fetch from 'isomorphic-fetch';

const url = 'api/toys'

//is dispatched in fetchToys() to reducer with type and payload
const getToys = toys => {
  return {
    type: 'FETCH_TOYS',
    toys
  }
}

const addToy = toy => {
  return {
    type: 'ADD_TOY',
    toy
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

export const createToy = toy => {
  return dispatch => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toy)
    })
      .then(res => res.json())
      .then(toy => {
        dispatch(addToy(toy))
      })
  }
}

