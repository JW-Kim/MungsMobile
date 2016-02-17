'use strict';

var React = require('react-native');
var Actions = require('react-native-router-flux').Actions;
var {View, Text, StyleSheet} = React;

class BeautyRequests extends React.Component {
    render(){
        return(
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.back} onPress={Actions.pop}>뒤로</Text>
                    <Text style={styles.title}>미용 요청서</Text>
                </View>
                <Text onPress={Actions.pop}>

                </Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row'
        ,backgroundColor: '#383838'
    }

    ,back: {
        width: 30
        ,height : 45
    }

    ,title: {
        flex: 1
        ,color:'#fff'
        ,textAlign:'center'
        ,fontWeight:'bold'
    }
})


module.exports = BeautyRequests;