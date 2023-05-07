export const initialState = {
  items: [],
  totalAmount: 0,
  isExist: false,
}

export const ActionType = {
  ADD_ITEM: 'ADD_ITEM',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      console.log('action: ', action.payload)
      const isExist = state.find((item) => item.id === action.payload.id)

      if (!state.length) {
        return [action.payload]
      }

      if (!isExist) {
        return [...state, action.payload]
      }

      const updatedItem = state.map((item) => {
        const rr = item.price + item.fixPrice * action.payload.amount

        if (item.id === action.payload.id) {
          return {
            ...item,
            amount: action.payload.amount + item.amount,
            price: rr,
          }
        }
        return item
      })

      return [...updatedItem]

    case ActionType.INCREMENT:
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            amount: item.amount + 1,
            price: item.price + item.fixPrice,
          }
        }
        return item
      })

    case ActionType.DECREMENT:
      return state.map((item) => {
        if (item.id === action.payload && item.amount !== 0) {
          return {
            ...item,
            amount: item.amount - 1,
            price: item.price - item.fixPrice,
          }
        }
        return item
      })

    default:
      return state
  }
}

/*

    const isExist = cartState.find((item) => item.title === data.title)
    if (!cartState.length) {
      return setCartState([data])
    }

    if (!isExist) {
      return setCartState([...cartState, data])
    }

    const updatedItem = cartState.map((item) => {
      if (item.title === data.title) {
        return {
          ...item,
          amount: item.amount + data.amount,
        }
      }
      return item
    })

    setCartState([...updatedItem])

*/
