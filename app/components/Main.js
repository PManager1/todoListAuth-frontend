import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var Main = React.createClass({
  render(){
    return (
        <View style={styles.container}>
            <Text>
                Welcome to Main.  |  You're logged in.
            </Text>
        </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = Main;











//
