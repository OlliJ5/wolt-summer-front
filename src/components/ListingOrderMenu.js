import React from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { changeListingOrder } from '../reducers/orderReducer'

const ListingOrderMenu = (props) => {
  const options = [
    { key: 1, text: 'Alphabetical (Ascending)', value: 'ascending' },
    { key: 2, text: 'Alphabetical (Descending)', value: 'descending' },
  ]

  const selectValue = (event, { value }) => {
    props.changeListingOrder(value)
  }

  return (
    <Dropdown
      style={{ paddingRight: '70px' }}
      clearable
      options={options}
      selection
      placeholder='Select display order'
      onChange={selectValue}
    />
  )
}



export default connect(null, { changeListingOrder })(ListingOrderMenu)

