'use strict';

var React = require('react-native');
var {View, Text, StyleSheet, TouchableHighlight, DrawerLayoutAndroid} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;
var ScrollableTabView = require('react-native-scrollable-tab-view');

var Nav = require('./Nav');
var Header = require('./Header');
var Beauty = require('./beauty/Beauty');
var Hotel = require('./hotel/Hotel');
var Hospital = require('./hospital/Hospital');

class Main extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            toggle : false
        };

    };

/*    componentDidMount() {
        if(this.props.menu == 'on-drag'){
            this.openDrawer();
        }
    };*/

    tabbarToggle() {
        this.refs['myTabbar'].getBarRef().show(this.toggle);
        this.toggle = !this.toggle;
    };

    openDrawer() {
        this.refs['DRAWER'].openDrawer();
    };

    render(){
      var renderNavigationView = (
        <Nav/>
      );

      return (
        <DrawerLayoutAndroid
          drawerWidth={150}
          ref={'DRAWER'}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => renderNavigationView}>
            <Header openDrawer={()=>this.refs['DRAWER'].openDrawer()}/>
            <ScrollableTabView tabBarBackgroundColor='#4FC3F7' tabBarUnderlineColor='#0277BD' tabBarActiveTextColor='#0277BD' tabBarInactiveTextColor='#FFFFFF'>
                <Beauty tabLabel="미 용" />
                <Hospital tabLabel="병 원" />
            </ScrollableTabView>
        </DrawerLayoutAndroid>
      );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});

module.exports = Main;