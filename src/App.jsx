import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './store'
import { ActionsTypeSnackbar } from './store/snackbar/snackbar'
import { SnackbarMui } from './components/UI/snackbar/Snackbar'
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './routes/routes'

const AppContent = () => {
  const { open } = useSelector((state) => state.snackbar)
  const dispatch = useDispatch()

  const onCloseHandler = () => {
    dispatch(ActionsTypeSnackbar.closeSnackbar())
  }

  return (
    <div>
      {open && <SnackbarMui onClose={onCloseHandler} />}
      <MainRoutes />
    </div>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  )
}

export default App
