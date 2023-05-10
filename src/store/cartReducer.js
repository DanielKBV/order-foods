export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_MEALS':
      return (state = action.payload)
    default:
      return state
  }
}
