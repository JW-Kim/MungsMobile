'use strict';

var React = require('react-native');
var {StyleSheet, ScrollView, View, Text, ListView, Image} = React;

var StoreList = require('./storeList.json');
var StoreDetail = require('./StoreDetail.js');

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

class Store extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: true,
        };
    };

    componentDidMount() {
        //this.fetchData();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(StoreList.storeList),
            loaded: true,
        });
    };

    fetchData() {
        fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                loaded: true,
            });
        })
        .done();
    };

    render(){
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderStore}
                style={styles.listView}
            />
        );
    };

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    };s

    _renderStore(store) {
        return (
            <StoreDetail/>
        );
    };
}

var styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    rightContainer: {
        flex: 1,
    },

    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },

    year: {
       textAlign: 'center',
    },

    thumbnail: {
        width: 53,
        height: 81,
    },

    listView: {
        backgroundColor: '#ffffff',
    },
})

module.exports = Store;