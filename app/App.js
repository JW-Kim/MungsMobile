'use strict';

var React = require('react-native');
var {AppRegistry, Navigator, StyleSheet,Text,View, Image, TouchableHighlight, BackAndroid} = React;
var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');
var Actions = require('react-native-router-flux').Actions;

var Login = require('./components/main/login/Login');
var CompanyRegister = require('./components/main/login/CompanyRegister');
var Main = require('./components/main/Main');
var BeautyRequests = require('./components/main/beauty/BeautyRequests');
var CompanyList = require('./components/main/beauty/CompanyList');
var CompanyDetail = require('./components/main/com/CompanyDetail');

BackAndroid.addEventListener('hardwareBackPress', () => {
    console.log('Actions', Actions)
    console.log('Actions.currentRouter', Actions.currentRouter._stack)
    if(Actions.currentRouter._stack == 'login' || Actions.currentRouter._stack == 'main'){
        return false;

    }else{
        Actions.pop();
        return true;
    }
});

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
                <Route name="main" component={Main} wrapRouter={true} title="Main" hideNavBar={true} />
                <Route name="beautyRequests" component={BeautyRequests} title="BeautyRequests"/>
                <Route name="companyList" component={CompanyList} title="CompanyList"/>
                <Route name="companyDetail" component={CompanyDetail} title="CompanyDetail"/>
                <Route name="companyRegister" component={CompanyRegister} title="companyRegister"/>
            </Router>
        );
    }
}

