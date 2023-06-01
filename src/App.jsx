import { useCallback, useState } from 'react'
import { Header } from './components/header/Header'
import { MealSummary } from './components/meal-summary/MealSummary'
import { Meals } from './components/meals/Meals'
import { Basket } from './components/basket/Basket'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './store'
import { ActionsTypeSnackbar } from './store/snackbar/snackbar'
import { SnackbarMui } from './components/UI/snackbar/Snackbar'

const AppContent = () => {
  const [toggle, setToggle] = useState(false)
  const { open } = useSelector((state) => state.snackbar)
  const dispatch = useDispatch()

  const onCloseHandler = () => {
    dispatch(ActionsTypeSnackbar.closeSnackbar())
  }

  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev)
  }, [])

  return (
    <>
      {open && <SnackbarMui onClose={onCloseHandler} />}
      <Header toggleHandler={toggleHandler} />
      <MealSummary />
      <Meals />
      {toggle && <Basket toggleHandler={toggleHandler} toggle={toggle} />}
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
