'use strict';

var React = require('react-native');
var {AppRegistry, Navigator, StyleSheet,Text,View} = React;
var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');
var Main = require('./components/main/Main');

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

class Header extends React.Component {
    render(){
        return <Text>Header</Text>
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
            </Router>
        );
    }
}