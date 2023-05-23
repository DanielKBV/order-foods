export const ActionTypeMeals = {
  MEALS: 'MEALS',
}

const initialState = {
  meals: [],
}

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeMeals.MEALS:
      return { ...state, meals: action.payload }
    default:
      return state
  }
}
