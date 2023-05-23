export const ActionTypeBasket = {
  NEW_MEALS: 'NEW_MEALS',
}

const initialState = {
  items: [],
}

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeBasket.NEW_MEALS:
      return { ...state, items: action.payload }

    default:
      return state
  }
}
