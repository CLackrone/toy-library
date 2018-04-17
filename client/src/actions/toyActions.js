import fetch from 'isomorphic-fetch';

const url = 'api/toys'

const getToys = toys => {
  return {
    type: 'FETCH_TOYS',
    toys
  }
}

//fetches toys from api, calls dispatch with arg of getToys with arg of toys payload
export const fetchToys = () => {
  return dispatch => {
    return fetch(url)
      .then(res => res.json())
      .then(toys => dispatch(getToys(toys)))
  }
}






// export const fetchToys = () => {
//   console.log('inside fetchToys')
//   dispatch({type: 'LOADING_TOYS'})
//   return dispatch => {
//     return fetch(url)
//       .then(res => res.json())
//       .then(toys => dispatch(getToys(toys)))
//   }
// }


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
