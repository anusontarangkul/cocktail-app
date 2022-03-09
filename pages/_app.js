import '../styles/globals.css'
import store from '../redux/store'
import { Provider } from 'react-redux'
import CocktailProvider from '../CocktailContext'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CocktailProvider>
        <Component {...pageProps} />
      </CocktailProvider>
    </Provider>

  )
}

export default MyApp
