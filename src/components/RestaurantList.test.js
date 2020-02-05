import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import RestaurantList from './RestaurantList'
import configureStore from 'redux-mock-store'


const mockStore = configureStore([])

const restaurants = [
  {
    description: 'Excellent food',
    image: 'https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90',
    name: 'Bob\'s burgers',
    online: true,
    tags: ['tacos', 'tortillas']
  },
  {
    description: 'decent food',
    image: 'https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90',
    name: 'KNICKS cafe',
    online: true,
    tags: ['tacos', 'tortillas']
  },
  {
    description: 'quality food',
    image: 'https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90',
    name: 'Ape restaurant',
    online: true,
    tags: ['tacos', 'tortillas']
  },
  {
    description: 'OK helsinki',
    image: 'https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90',
    name: 'KNICKS restaurant',
    online: true,
    tags: ['tacos', 'tortillas']
  }
]

describe('Renders all restaurants in correct order', () => {

  test('renders all restaurants in initial order', () => {
    const store = mockStore({
      restaurants: restaurants,
      listingOrder: ''
    })

    const component = render(
      <Provider store={store}>
        <RestaurantList />
      </Provider>
    )
    const names = component.container.querySelectorAll('.header')
    expect(names.length).toBe(4)
    const first = component.container.querySelector('.ui.card:nth-child(1)')
    const second = component.container.querySelector('.ui.card:nth-child(2)')
    const third = component.container.querySelector('.ui.card:nth-child(3)')
    const fourth = component.container.querySelector('.ui.card:nth-child(4)')

    expect(first).toHaveTextContent('Bob\'s burgers')
    expect(second).toHaveTextContent('KNICKS cafe')
    expect(third).toHaveTextContent('Ape restaurant')
    expect(fourth).toHaveTextContent('KNICKS restaurant')
  })

  test('renders all restaurants in alphabetical order when chosen', () => {
    const store = mockStore({
      restaurants: restaurants,
      listingOrder: 'ascending'
    })

    const component = render(
      <Provider store={store}>
        <RestaurantList />
      </Provider>
    )

    const first = component.container.querySelector('.ui.card:nth-child(1)')
    const second = component.container.querySelector('.ui.card:nth-child(2)')
    const third = component.container.querySelector('.ui.card:nth-child(3)')
    const fourth = component.container.querySelector('.ui.card:nth-child(4)')

    expect(first).toHaveTextContent('Ape restaurant')
    expect(second).toHaveTextContent('Bob\'s burgers')
    expect(third).toHaveTextContent('KNICKS cafe')
    expect(fourth).toHaveTextContent('KNICKS restaurant')
  })

  test('renders all restaurants in reverse alphabetical order when chosen', () => {
    const store = mockStore({
      restaurants: restaurants,
      listingOrder: 'descending'
    })

    const component = render(
      <Provider store={store}>
        <RestaurantList />
      </Provider>
    )

    const first = component.container.querySelector('.ui.card:nth-child(1)')
    const second = component.container.querySelector('.ui.card:nth-child(2)')
    const third = component.container.querySelector('.ui.card:nth-child(3)')
    const fourth = component.container.querySelector('.ui.card:nth-child(4)')

    expect(first).toHaveTextContent('KNICKS restaurant')
    expect(second).toHaveTextContent('KNICKS cafe')
    expect(third).toHaveTextContent('Bob\'s burgers')
    expect(fourth).toHaveTextContent('Ape restaurant')
  })
})