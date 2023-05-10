import { useCallback, useState } from 'react'
import { Header } from './components/header/Header'
import { MealSummary } from './components/meal-summary/MealSummary'
import { Meals } from './components/meals/Meals'
import { Basket } from './components/basket/Basket'
import { CartProvider } from './store/cartContext'

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
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App
