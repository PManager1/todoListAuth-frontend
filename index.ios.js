import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
} from 'react-native';

import App from './app/components/App';
import {configureStore} from './app/store';
      // <Provider store={configureStore()}>
class todoListAuth extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('todoListAuth', () => todoListAuth);
