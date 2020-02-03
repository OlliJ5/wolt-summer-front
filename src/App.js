import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeRestaurants } from './reducers/restaurantReducer'
import { Container, Card } from 'semantic-ui-react'

function App(props) {

  useEffect(() => {
    props.initializeRestaurants()
  }, [])

  console.log('ravintolat', props.restaurants)

  return (
    <Container>
      <h1>Restaurant lister</h1>
      {props.restaurants.map(restaurant =>
        <Card
          key={restaurant.name}
          image={restaurant.image}
        />
      )}
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    restaurants: state
  }
}

export default connect(mapStateToProps, { initializeRestaurants })(App)
