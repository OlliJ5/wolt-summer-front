import React from 'react'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

const RestaurantList = (props) => (
  <Card.Group style={{ paddingTop: '50px' }} centered>
    {props.restaurants.map(restaurant =>
      <Card key={restaurant.name}>
        <img className={`ui image ${restaurant.online ? '' : 'disabled'}`} src={restaurant.image} height='200' alt="restaurant's food" />
        {!restaurant.online && (
          <div style={{ position: 'absolute', top: 0, width: '100%', height: 'auto' }}>CLOSED</div>
        )}
        <Card.Content>
          <Card.Header>
            {restaurant.name}
          </Card.Header>
          <Card.Description>
            {restaurant.tags.join(', ')}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          {restaurant.description}
        </Card.Content>
      </Card>
    )}
  </Card.Group>
)

const mapStateToProps = (state) => {

  const getRestaurantsInOrder = () => {
    //sorts restaurants in alphabtical order
    const sorted = [...state.restaurants].sort((a, b) => a.name.localeCompare(b.name))
    if (state.listingOrder === 'ascending') {
      return sorted
    } else if (state.listingOrder === 'descending') {
      return sorted.reverse()
    } else {
      return state.restaurants
    }
  }

  return {
    restaurants: getRestaurantsInOrder(),
  }
}


export default connect(mapStateToProps)(RestaurantList)