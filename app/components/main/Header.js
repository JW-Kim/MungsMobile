'use strict';

var React = require('react-native');
var {View, TouchableHighlight, Image, Text, StyleSheet} = React;
var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');

class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
    };

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableHighlight onPress={() => this.props.openDrawer()}>
                        <Image
                           style={styles.menuImg}
                           source={require('../../../assets/img/menu.jpg')}
                        />
                    </TouchableHighlight>
                    <View style={{flex:1, alignItems: 'center'}}>
                        <View style={{flexDirection:'row'}}>
                        <Image
                            source={require('../../../assets/img/logo.png')}
                            style={{width: 18, height:18}}
                        />
                        <Text style={{color: '#2979FF', fontSize: 18, marginLeft: 3}}>BLUE MONGS</Text>
                        </View>
                    </View>
                    <Image
                       style={styles.menuImg}
                       source={require('../../../assets/img/setting.jpg')}
                    />
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
        ,backgroundColor: '#383838'
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