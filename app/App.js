'use strict';

var React = require('react-native');
var {AppRegistry, Navigator, StyleSheet,Text,View, Image} = React;
var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');
var Actions = require('react-native-router-flux').Actions;
var Main = require('./components/main/Main');
var SampleImage = require('./components/SampleImage')

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <View style={styles.header}>
                <Image
                   style={{
                       width: 25,
                       height: 25,
                       backgroundColor: 'transparent',
                       marginRight: 2,
                       marginLeft: 2,
                   }}
                   source={require('../assets/img/header1.jpg')}
                />
                <Text >Header</Text>
            </View>
        );
    }
}

export default class App extends React.Component {
    render() {
        return (
            <Router hideNavBar={true} >
                <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                <Schema name="withoutAnimation"/>
                <Schema name="tab" type="switch" icon={TabIcon} />

                <Route name="main" header={Header} component={Main} wrapRouter={true} title="Main" hideNavBar={true} initial={true}/>
                <Route name="sampleImage" component={SampleImage} title="SampleImage"/>
            </Router>
        );
    }
}

var styles = StyleSheet.create({
    header : {
        height : 25
        ,backgroundColor: '003399'
    }
})