import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';
import alertsReducer from './reducers/alertReducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
    alert: alertsReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;