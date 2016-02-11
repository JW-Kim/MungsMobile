'use strict';

var React = require('react-native');
var {StyleSheet, ScrollView, View, Text} = React;

class Hotel extends React.Component {

    constructor(props, context) {
        super(props, context);
    };

    render(){
        return (
            <ScrollView tabLabel="ion|ios-paper" style={styles.tabView}>
                <View style={styles.card}>
                <Text>호텔</Text>
                </View>
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({

  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  }

  ,card: {
      borderWidth: 1,
      backgroundColor: '#fff',
      borderColor: 'rgba(0,0,0,0.1)',
      margin: 5,
      height: 150,
      padding: 15,
      shadowColor: '#ccc',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 3,
    }
})

module.exports = Hotel;