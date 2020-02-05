import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeRestaurants } from './reducers/restaurantReducer'
import { Container, Dimmer, Loader, Header } from 'semantic-ui-react'
import RestaurantList from './components/RestaurantList'
import ListingOrderMenu from './components/ListingOrderMenu'

const App = (props) => {
  const initializeListing = props.initializeRestaurants

  useEffect(() => {
    initializeListing()
  }, [initializeListing])

  return (
    <Container>

      <Header as='h1' textAlign='center' style={{ paddingBottom: '10px', paddingTop: '15px' }}>
        Restaurant Lister
      </Header>

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

export default connect(mapStateToProps, { initializeRestaurants })(App)
