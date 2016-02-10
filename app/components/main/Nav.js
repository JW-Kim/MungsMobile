'use strict';

var React = require('react-native');
var {ListView, Text, StyleSheet, View} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;

class Nav extends React.Component {

    constructor(props, context) {
        super(props, context);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
          dataSource: ds.cloneWithRows(['미 용', '교 배', '병 원', '설 정']),
        };
    };

    render(){
        return(
            <ListView style={styles.container}
              dataSource={this.state.dataSource}
              renderRow={this.navRender}
            />
        );
    };

    navRender(rowData, sectionID, rowID, highlightRow){
        return(
            <View style={styles.item}>
                <Text style={styles.text}>{rowData}</Text>
            </View>
        )
    };
};

var styles  = StyleSheet.create({
    container: {
        flex: 1
        ,paddingTop: 20
        ,backgroundColor: '#282828'
    }

    ,item: {
        height: 40
    }

    ,text: {
        color:'#FFFFFF '
        ,textAlign:'center'
        ,fontWeight:'bold'
    }
});

module.exports = Nav;