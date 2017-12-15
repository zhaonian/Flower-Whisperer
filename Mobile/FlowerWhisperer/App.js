import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';
import reducers from './src/reducers';


export default class App extends React.Component {
        render() {
                const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
                return (
                        <Provider store={store}>
                                <Router />
                        </Provider>
                );
        }
}
