export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TOYS':
      return action.toys

    case 'TOY_FETCHED':
      const index = state.findIndex(toy => toy.id === action.toy.id)
      if (index > -1) {
        return state.map(toy => {
          if (toy.id === action.toy.id) {
            return action.toy 
          } else {
            return toy 
          }
        })
      } else {
        return [...state, action.toy]
      }

    case 'ADD_TOY':
      return [...state, action.toy]

    case 'UPDATE_TOY':
      return state.map(toy => toy.id === action.toy.id ? action.toy : toy)

    case 'UPDATE_TOY_LIKES': 
      return state.map(toy => toy.id === action.toy.id ? action.toy : toy)

    case 'DELETE_TOY':
      return state.filter(toy => toy.id !== action.id)

    default: 
      return state
  }
}

