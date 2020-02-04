const orderReducer = (state = '', action) => {
  switch(action.type) {
    case 'CHANGE_ORDER':
      return action.data
    default:
      return state
  }
}

export const changeListingOrder = (listingOrder) => {
  return {
    type: 'CHANGE_ORDER',
    data: listingOrder
  }
}

export default orderReducer