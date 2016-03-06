'use strict';

var React = require('react-native');
var {AppRegistry, Navigator, StyleSheet,Text,View, Image, TouchableHighlight} = React;
var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');
var Actions = require('react-native-router-flux').Actions;

var Login = require('./components/main/login/Login');
var Main = require('./components/main/Main');
var SampleImage = require('./components/SampleImage');
var BeautyRequests = require('./components/main/beauty/BeautyRequests');

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
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

                <Route name="login" component={Login} title="Login" initial={true}/>
                <Route name="main" component={Main} wrapRouter={true} title="Main" hideNavBar={true}/>
                <Route name="sampleImage" component={SampleImage} title="SampleImage"/>
                <Route name="beautyRequests" component={BeautyRequests} title="BeautyRequests"/>
            </Router>
        );
    }
}

