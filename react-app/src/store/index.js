import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cart';
import productReducer from './product';
import purchaseReducer from './purchase';
import mapsReducer from './maps';
import addressReducer from './address';
import reviewsReducer from './review';
import session from './session'

const rootReducer = combineReducers({
  session,
  products: productReducer,
  purchases: purchaseReducer,
  cart: cartReducer,
  maps: mapsReducer,
  address: addressReducer,
  reviews: reviewsReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
