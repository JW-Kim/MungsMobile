'use strict';

var React = require('react-native');
var {View, Text, StyleSheet, TouchableHighlight, DrawerLayoutAndroid} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;

var Nav = require('./nav/Nav');

class Main extends React.Component {
    render(){
      var renderNavigationView = (
        <Nav/>
      );

      return (
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => renderNavigationView}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>메인</Text>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>page!</Text>
            <Button onPress={Actions.sampleImage}>image</Button>
          </View>
        </DrawerLayoutAndroid>
      );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});

module.exports = Main;