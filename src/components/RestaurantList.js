import React from 'react'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Restaurant from './Restaurant'

const RestaurantList = (props) => (
  <Card.Group style={{ paddingTop: '50px' }} centered>
    {props.restaurants.map(restaurant =>
      <Restaurant key={restaurant.name} restaurant={restaurant}/>
    )}
  </Card.Group>
)

const mapStateToProps = (state) => {

  //sorts restaurants in alphabetical order
  const sortRestaurants = (restaurants) => {
    return [...restaurants].sort((a, b) => a.name.localeCompare(b.name))
  }

  const getRestaurantsInSelectedOrder = () => {
    if (state.listingOrder === 'ascending') {
      return sortRestaurants(state.restaurants)
    } else if (state.listingOrder === 'descending') {
      return sortRestaurants(state.restaurants).reverse()
    } else {
      return state.restaurants
    }
  }

  return {
    restaurants: getRestaurantsInSelectedOrder(),
  }
}


export default connect(mapStateToProps)(RestaurantList)