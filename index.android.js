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
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';


export default class Jobber extends Component {
  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
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

        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={(route, navigator) =>
            <TouchableHighlight onPress={() => {
              if (route.index === 0) {
                navigator.push(routes[1]);
              } else {
                navigator.pop();
              }
            }}>
            <Text>Hello {route.title}!</Text>
            </TouchableHighlight>
          }
          style={{padding: 100}}
        />
        
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
