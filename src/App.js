import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeRestaurants } from './reducers/restaurantReducer'
import { changeListingOrder } from './reducers/orderReducer'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import RestaurantList from './components/RestaurantList'
import ListingOrderMenu from './components/ListingOrderMenu'

const App = (props) => {
  const initializeListing = props.initializeRestaurants

  useEffect(() => {
    initializeListing()
  }, [initializeListing])

  return (
    <Container style={{ paddingLeft: '30px', backgroundColor: '#66c2ff' }}>
      <h1 style={{ paddingBottom: '10px', paddingTop: '15px' }}>Restaurant lister</h1>

      {props.restaurants.length === 0 && (
        <Dimmer active inverted>
          <Loader />
        </Dimmer>
      )}

      {props.restaurants.length > 0 && (
        <>
          <ListingOrderMenu />
          <RestaurantList />
        </>
      )}

    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  }
}

export default connect(mapStateToProps, { initializeRestaurants, changeListingOrder })(App)
