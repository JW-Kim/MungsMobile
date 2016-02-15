'use strict';

var React = require('react-native');
var Beauties = require('./beauty.json');
var {StyleSheet, ScrollView, View, Text, ListView, Image} = React;

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'beauty.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var PARAMS = '';
var REQUEST_URL = API_URL + PARAMS;

class Beauty extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    };

    componentDidMount() {
        //this.fetchData();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(Beauties.beauties),
            loaded: true,
        });
    };

    fetchData() {
        fetch(REQUEST_URL,{
            method: 'GET'
        }).then((response) => response.json())
        .then((responseData) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData.beauties),
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
                renderRow={this.renderBeauty}
                style={styles.listView}
            />
        );
    };

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading Beauty...
                </Text>
            </View>
        );
    };

    renderBeauty(beauty) {

        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Image
                    source={require('../../../../assets/img/dog1.jpg')}
                    style={styles.thumbnail}
                    />
                    <Image
                    source={require('../../../../assets/img/dog2.jpg')}
                    style={styles.thumbnail}
                    />
                    <Image
                    source={require('../../../../assets/img/dog3.jpg')}
                    style={styles.thumbnail}
                    />
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{beauty.type == 'D' ? '개' : '고양이'} ({beauty.weight})</Text>
                    <Text style={styles.year}>{beauty.etc}</Text>
                </View>
            </View>
        );
    };
}

var styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderColor: '#707070',
        borderWidth: 1,
        padding: 10
    },

    topContainer: {
        flexDirection: 'row'
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
        flex: 1
    },

    listView: {

    },
})

module.exports = Beauty;