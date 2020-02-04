import React from 'react'
import { Card } from 'semantic-ui-react'

const Restaurant = ({ restaurant }) => (
  <Card key={restaurant.name}>
    <img className={`ui image ${restaurant.online ? '' : 'disabled'}`} src={restaurant.image} height='200' alt="restaurant's food" />
    {!restaurant.online && (
      <b style={{ position: 'absolute', left: '15px', top: '15px' }}>CLOSED</b>
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
)

export default Restaurant