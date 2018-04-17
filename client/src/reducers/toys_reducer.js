export default (state = {loading: false, toys: [] }, action) => {
  switch (action.type) {
    case 'FETCH_TOYS':
      console.log(action.toys)
      return { loading: false, toys: action.toys }
    default: 
      console.log('returning default state')
      return state
  }
}