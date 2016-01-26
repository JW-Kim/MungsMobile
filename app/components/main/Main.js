'use strict';

var React = require('react-native');
var {View, Text, StyleSheet, TouchableHighlight, DrawerLayoutAndroid} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;

class Main extends React.Component {
    render(){
      var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Navi</Text>
        </View>
      );
      return (
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>main</Text>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>page!</Text>
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