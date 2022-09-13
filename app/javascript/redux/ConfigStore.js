
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import messageReducer, { getmessage } from './message/api.js';

const rootReducer = combineReducers({
  message: messageReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getmessage());

export default store;