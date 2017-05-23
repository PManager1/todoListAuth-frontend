import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
} from 'react-native';

import Main from './app/components/Main';
import {configureStore} from './app/store';
      // <Provider store={configureStore()}>
class todoListAuth extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('todoListAuth', () => todoListAuth);
