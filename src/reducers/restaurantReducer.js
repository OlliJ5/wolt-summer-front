import restaurantService from '../services/restaurants'

const restaurantReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_RESTAURANTS':
      return action.data
    default:
      return state
  }
}

export const initializeRestaurants = () => {
  return async dispatch => {
    const restaurants = await restaurantService.getAll()
    dispatch({
      type: 'INIT_RESTAURANTS',
      data: restaurants
    })
  }
}

export default restaurantReducer