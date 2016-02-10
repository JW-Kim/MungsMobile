'use strict';

var React = require('react-native');
var {View, Text, StyleSheet, TouchableHighlight, DrawerLayoutAndroid} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';

var Nav = require('./Nav');
var Header = require('./Header');

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
            <Tabbar ref="myTabbar" barColor={'#383838'}>
                <Tab name="beauty">
                    <IconWithBar label="미용" type={glypy.Beauty} from={'icomoon'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                          <Text onPress={()=>this.openDrawer()}>미용</Text>
                        </View>
                    </RawContent>
                </Tab>
                <Tab name="mating">
                    <IconWithBar label="교배" type={glypy.Mating} from={'icomoon'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }} >
                            <Text onPress={()=>this.tabbarToggle()}>교배</Text>
                        </View>
                    </RawContent>
                </Tab>
                <Tab name="hospital">
                    <IconWithBar label="병원" type={glypy.Hospital} from={'icomoon'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>console.log('stats')}>병원</Text>
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