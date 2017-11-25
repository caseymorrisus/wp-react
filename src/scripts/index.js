import {render}   from 'react-dom'
import {Provider} from 'react-redux'
import thunk      from 'redux-thunk'
import reducers   from 'reducers'
import App        from './App'

import {
  createStore, 
  applyMiddleware
} from 'redux'

const store = createStore(reducers, applyMiddleware(thunk))

const app = document.getElementById('app')

if (app) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    app 
  )  
}