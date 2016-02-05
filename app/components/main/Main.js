'use strict';

var React = require('react-native');
var {View, Text, StyleSheet, TouchableHighlight, DrawerLayoutAndroid} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;
var MainConstants = require('../../constants/main/MainConstants.js');
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';

var Nav = require('./nav/Nav');

const glypy = glypyMapMaker({
  Beauty: 'e900',
  Mating: 'e901',
  Hospital: 'e902'
});


class Main extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            toggle : false
        };
    };


    tabbarToggle() {
        this.refs['myTabbar'].getBarRef().show(this.toggle);
        this.toggle = !this.toggle;
    }

    render(){
      var renderNavigationView = (
        <Nav/>
      );

      return (
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => renderNavigationView}>
            <Tabbar ref="myTabbar" barColor={'black'}>
                <Tab name="beauty">
                    <IconWithBar label="Home" type={glypy.Beauty} from={'icomoon'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                          <Text onPress={()=>this.tabbarToggle()}>beauty</Text>
                        </View>
                    </RawContent>
                </Tab>
                <Tab name="mating">
                    <IconWithBar label="Camera" type={glypy.Mating} from={'icomoon'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>console.log('camera')}>mating</Text>
                        </View>
                    </RawContent>
                </Tab>
                <Tab name="hospital">
                    <IconWithBar label="Stats" type={glypy.Hospital} from={'icomoon'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>console.log('stats')}>hospital</Text>
                        </View>
                    </RawContent>
                </Tab>
            </Tabbar>
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