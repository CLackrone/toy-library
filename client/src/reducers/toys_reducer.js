export default (state = {loading: false, toys: [] }, action) => {
  switch (action.type) {
    case 'FETCH_TOYS':
      return { loading: false, toys: action.payload }
    default: 
      console.log('returning default state')
      return state
  }
}