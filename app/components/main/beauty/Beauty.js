'use strict';

var React = require('react-native');
var Beauties = require('./beauty.json');
var {StyleSheet, ScrollView, View, Text, ListView, Image, TouchableNativeFeedback} = React;
var Actions = require('react-native-router-flux').Actions;

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
            <TouchableNativeFeedback onPress={Actions.beautyRequests}>
                <View style={styles.container} >
                    <View style={styles.imgContainer}>
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
                    <View style={styles.contContainer}>
                        <Text style={styles.title}>{beauty.type == 'D' ? '개' : '고양이'} ({beauty.weight})</Text>
                        <Text style={styles.etc}>{beauty.etc}</Text>
                        <Text style={styles.regDtm}>{beauty.regDtm}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    };
}

var styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        borderColor: '#D0D0D0',
        borderWidth: 1,
        marginTop: 5
    },

    imgContainer: {
        flexDirection: 'row'
    },

    contContainer: {
        flexDirection: 'column'
    },

    title: {
        fontSize: 10,
        color: '330033',
        left: 10
    },

    etc: {
        fontSize: 10,
        color: '#101010',
        left: 10
    },

    regDtm: {
        fontSize: 10,
        color: '#787878',
        left: 10
    },

    thumbnail: {
        flex: 1,
        width: 120,
        height:120
    },

    listView: {

    },
})

module.exports = Beauty;