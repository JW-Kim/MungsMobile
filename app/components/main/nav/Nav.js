'use strict';

var React = require('react-native');
var {ListView, Text, StyleSheet} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;

class Nav extends React.Component {

    constructor(props, context) {
        super(props, context);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
          dataSource: ds.cloneWithRows(['교배', 'row 2']),
        };
    };

    render(){
        return(
            <ListView style={styles.container}
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>{rowData}</Text>}
            />
        );
    }
};

var styles  = StyleSheet.create({
    container: {
        flex: 1
        ,backgroundColor: '006699'
    }
});

module.exports = Nav;