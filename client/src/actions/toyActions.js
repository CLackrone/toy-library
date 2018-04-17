import fetch from 'isomorphic-fetch';

const url = '/toys'

const fetchToys = toys => {
  return {
    type: 'FETCH_TOYS',
    toys
  }
}

export const fetchToys = () => {
  dispatch({type: 'LOADING_TOYS'})
  return dispatch => {
    return fetch(url)
      .then(res => res.json())
      .then(toys => dispatch(fetchToys(toys)))
  }
}


// export function fetchCats() {
//   const url = 'http://localhost:4000/db'

//   return function (dispatch) {
//     dispatch({type: 'LOADING_CATS'})
//     return fetch(url)
//       .then(res => res.json())
//       .then(resJSON => {
//         dispatch({type: 'FETCH_CATS', payload: resJSON.images})
//       })
//   }
// }
