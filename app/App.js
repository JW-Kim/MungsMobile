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
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image
                       style={styles.menuImg}
                       source={require('../assets/img/menu.jpg')}
                    />
                    <Text style={styles.title}>블루 멍스</Text>
                    <Image
                       style={styles.menuImg}
                       source={require('../assets/img/setting.jpg')}
                    />
                </View>
                <View style={styles.tabContainer}>
                    <View style={styles.tabMenu}>
                        <Text style={styles.tabTitle}>미용</Text>
                    </View>
                    <View style={styles.tabMenu}>
                        <Text style={styles.tabTitle}>교배</Text>
                    </View>
                    <View style={styles.tabMenu}>
                        <Text style={styles.tabTitle}>병원</Text>
                    </View>
                </View>
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

    container : {
         flexDirection: 'column'
    }

    ,headerContainer : {
        flexDirection: 'row'
        ,alignItems: 'center'
        ,height : 30
        ,backgroundColor: '	#000000'
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

    ,tabContainer : {
        flexDirection: 'row'
        ,alignItems: 'center'
        ,height : 30
        ,backgroundColor: '#D8D8D8'
    }

    ,tabMenu : {
        flex : 1
    }

    ,tabTitle : {
        flex: 1
        ,color:'#000000'
        ,textAlign:'center'
        ,fontWeight:'bold'
    }
})