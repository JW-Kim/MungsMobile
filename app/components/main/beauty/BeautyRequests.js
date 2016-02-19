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
                     <Text style={styles.back}></Text>
                </View>
                <View style={styles.image}>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row'
        ,backgroundColor: '#383838'
        ,height : 45
        ,alignItems: 'center'
    }

    ,back: {
        width: 30
        ,color:'#fff'
    }

    ,title: {
        flex: 1
        ,color:'#fff'
        ,textAlign:'center'
        ,fontWeight:'bold'
    }

    ,image: {

    }
})


module.exports = BeautyRequests;