'use strict';

var React = require('react-native');
var Actions = require('react-native-router-flux').Actions;
var {View, Text} = React;

class BeautyRequests extends React.Component {

    render(){
        return(
            <View>
                <Text onPress={Actions.pop}>
                    미용요청서
                </Text>
            </View>
        )
    }
}

module.exports = BeautyRequests;