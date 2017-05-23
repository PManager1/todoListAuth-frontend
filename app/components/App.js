import React, { Component } from 'react';
import {connect} from 'react-redux'
// import { Provider } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Login from './Login';
import Main from './Main';


var App =  React.createClass ({

  render() {
    if(this.props.user_id){
      console.log(' inside the if - Main view ');
      return (
      <Main />
      );
    } else{   // if the props.user_id doesnt exist we'll return the login view.
      console.log(' inside the else in App.js - Login View ');
      return (
      <Login />
      );
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#aaa'
  },
});

var mapStateToProps = (state) => {
  return {
    user_id: state.auth.user_id
  }
}
module.exports = connect(mapStateToProps)(App);

























//













//
