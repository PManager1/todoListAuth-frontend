
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var Login = React.createClass({
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Welcome to React Native - Login View.
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
    paddingTop: 20,
    backgroundColor: '#aaa'
  },
  titleContainer:{
    padding: 10,
  },
  title:{
    color: 'white',
    fontSize: 35,
  }
});


module.exports = Login;















//
