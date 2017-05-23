import React, { Component } from 'react';
// import {connect} from 'react-redux'
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


var Main =  React.createClass ({

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.topBar}>
          <Text style={styles.title}> Boiler App ready!
          </Text>
        </View>

      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  topBar:{
    padding:16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  title:{
    color: 'white',
    fontSize: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputContainer:{
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#2ecc71'
  },
  input:{
    height: 26,
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  todoContainer: {
    padding: 16,
    borderTopWidth:1,
    borderBottomWidth:1,
    marginBottom: -1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoText: {

  },
});

module.exports = Main;
















//
