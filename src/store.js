import {createStore,applyMiddleware ,compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware())

const store = createStore(reducer,enhancer)

export default store 