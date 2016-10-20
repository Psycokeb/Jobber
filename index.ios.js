/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Button from 'apsl-react-native-button'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Jobber extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Jobber
        </Text>
        <Button style={styles.buttonConnexion}>
          Connexion
        </Button>
        <Button style={styles.buttonInscription}>
          Registration
        </Button>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#14c8b9',
    justifyContent: 'center',

  },
  welcome: {
    fontSize: 60,
    color: 'yellow',
    marginTop: 40,
  },
  
  buttonConnexion: {
    marginLeft: 120,
    marginTop : 30,
    width: 140,
  },
  buttonInscription : {
    marginLeft: 120,
    marginTop : 10,
    width: 140,
  },
});

AppRegistry.registerComponent('Jobber', () => Jobber);
