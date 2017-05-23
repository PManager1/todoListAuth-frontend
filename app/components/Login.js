import React from 'react';
// its like react redux connect.
import {reduxForm} from 'redux-form';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

var Login = React.createClass({
  onSignIn: function () {
    var {email, password} = this.props.fields;
    console.log(email.value, password.value);
  },
  render(){
    var {fields: {email, password}} = this.props;
    var renderError = (field) => {
      if(field.touched && field.error){
        return(
          <Text style={styles.formError}> {field.error} </Text>
        )
      }
    }
    return(
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            To-Do
          </Text>
        </View>
        <View style={styles.field}>
            <TextInput
              {...email}
              placeholder="Email"
              style={styles.textInput}/>

            <View>
                {renderError(email)}
              </View>
        </View>

        <View style={styles.field}>
            <TextInput
              {...password}
              placeholder="Password"
              style={styles.textInput}
          />
          <View>
              {renderError(password)}
            </View>
        </View>


          <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <Text style={styles.button} onPress={this.onSignIn}>
                  SignIn
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.button}> SignUp
                </Text>
              </TouchableOpacity>
          </View>

      </View>
    );
  }
});


const styles = StyleSheet.create({
  buttonContainer:{
    padding:20,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button:{
    fontSize: 30,
    color: 'white'
  },
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
    fontSize: 35
  },
  field: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop:0,
    backgroundColor: 'white'
  },
  textInput: {
    height: 26,
  },
  formError:{
    color: 'red',
  }
});

var validate = (formProps) => {
  var errors = {};
  if (!formProps.email){
    errors.email="Please enter your email";
  }
  if (!formProps.password){
    errors.password="Please enter your password";
  }
    return errors;
}

module.exports = reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
}, null, null)(Login);















//
