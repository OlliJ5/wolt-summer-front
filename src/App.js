import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { initializeRestaurants } from './reducers/restaurantReducer'
import { Container, Card, Dropdown } from 'semantic-ui-react'

function App(props) {
  //tee state sille mikä dropdownissa valittu
  const [order, setOrder] = useState('')

  const initialize = props.initializeRestaurants

  useEffect(() => {
    initialize()
  }, [initialize])

  console.log('ravintolat', props.restaurants)

  const restaurantOrder = () => {
    const sorted = [...props.restaurants].sort((a, b) => a.name.localeCompare(b.name))
    if (order === 'ascending') {
      return sorted
    } else if (order === 'descending') {
      return sorted.reverse()
    } else {
      return props.restaurants
    }
  }


  //console.log('sortattuna', sorted)

  const options = [
    { key: 1, text: 'Alphabetical (Ascending)', value: 'ascending' },
    { key: 2, text: 'Alphabetical (Descending)', value: 'descending' },
  ]

  const selectValue = (event, { value }) => {
    console.log('value', value)
    setOrder(value)
  }

  return (
    <Container>
      <h1 style={{ paddingBottom: '10px', paddingTop: '15px' }}>Restaurant lister</h1>
      <Dropdown
        style={{ paddingRight: '100px' }}
        clearable
        options={options}
        selection
        placeholder='Select display order'
        onChange={selectValue}
      />
      <Card.Group style={{ paddingTop: '50px' }}>
        {restaurantOrder().map(restaurant =>
          <Card
            key={restaurant.name}
            image={restaurant.image}
            header={restaurant.name}
            description={restaurant.description}
          />
        )}
      </Card.Group>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    restaurants: state
  }
}

export default connect(mapStateToProps, { initializeRestaurants })(App)
