import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Restaurant from './Restaurant'

describe('Renders restaurant info', () => {

  const openRestaurant = {
    description: 'Mahtavaa ruokaa',
    image: 'https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90',
    name: 'Best restaurant on the planet',
    online: true,
    tags: ['tacos', 'tortillas']
  }

  //component.debug()

  test('renders the restaurant name', () => {
    const component = render(
      <Restaurant restaurant={openRestaurant} />
    )

    expect(component.container).toHaveTextContent(
      'Best restaurant on the planet'
    )
  })

  test('renders the tags of the restaurant', () => {
    const component = render(
      <Restaurant restaurant={openRestaurant} />
    )
    //const desc = component.container.querySelector('description')
    // console.log(prettyDOM(desc))
    //component.debug()
    expect(component.container).toHaveTextContent(
      'tacos, tortillas'
    )
  })

  test('renders the desctiption of the restaurant', () => {
    const component = render(
      <Restaurant restaurant={openRestaurant} />
    )

    expect(component.container).toHaveTextContent(
      'Mahtavaa ruokaa'
    )
  })

  test('renders an unblurred image of the restaurant', () => {
    const component = render(
      <Restaurant restaurant={openRestaurant} />
    )

    const img = component.container.querySelector('img')

    expect(img).toBeDefined()
    expect(img).toHaveAttribute('class', 'ui image ')
  })
})

describe('Renders info for a closed restaurant', () => {

  const closedRestaurant = {
    description: 'Mahtavaa ruokaa',
    image: 'https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90',
    name: 'Best restaurant on the planet',
    online: false,
    tags: ['tacos', 'tortillas']
  }

  test('renders a blurred image of a closed restaurant', () => {
    const component = render(
      <Restaurant restaurant={closedRestaurant} />
    )

    const img = component.container.querySelector('img')
    expect(img).toHaveAttribute('class', 'ui image disabled')
  })

  test('renders the text CLOSED', () => {
    const component = render(
      <Restaurant restaurant={closedRestaurant} />
    )

    const text = component.container.querySelector('b')
    console.log(prettyDOM(text))
    expect(text).toHaveTextContent('CLOSED')
  })

})
