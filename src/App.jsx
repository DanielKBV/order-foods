import { useCallback, useState } from 'react'
import { Header } from './components/header/Header'
import { MealSummary } from './components/meal-summary/MealSummary'
import { Meals } from './components/meals/Meals'
import { Basket } from './components/basket/Basket'
import { Provider } from 'react-redux'
import { store } from './store'

const AppContent = () => {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev)
  }, [])

  return (
    <>
      <Header toggleHandler={toggleHandler} />
      <MealSummary />
      <Meals />
      {toggle && <Basket toggleHandler={toggleHandler} />}
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App
