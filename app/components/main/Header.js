'use strict';

var React = require('react-native');
var {View, TouchableHighlight, Image, Text, StyleSheet} = React;
var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');

var Icon = require('react-native-vector-icons/MaterialIcons');

class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
    };

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableHighlight onPress={() => this.props.openDrawer()}>
                        <Icon name='menu' size={30} color='#00BCD4'/>
                    </TouchableHighlight>
                    <View style={{flex:1, alignItems: 'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Image
                                source={require('../../../assets/img/logo.jpg')}
                                style={{width: 181, height:37}}
                            />
                        </View>
                    </View>
                    <Icon name='notifications' size={30} color='#00BCD4'/>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({

    container : {
         flexDirection: 'column'
    }

    ,headerContainer : {
        flexDirection: 'row'
        ,alignItems: 'center'
        ,height : 45
        ,backgroundColor: '#FFFFFF'
    }

    ,menuImg : {
        width: 25
        ,height: 25
        ,backgroundColor: 'transparent'
        ,marginRight: 2
        ,marginLeft: 2
    }

    ,title : {
        flex: 1
        ,color:'#fff'
        ,textAlign:'center'
        ,fontWeight:'bold'
    }
})

module.exports = Header;