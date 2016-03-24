'use strict';

var React = require('react-native');
var Beauties = require('./beauty.json');
var {StyleSheet, ScrollView, View, Text, ListView, Image, TouchableWithoutFeedback} = React;
var Actions = require('react-native-router-flux').Actions;
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

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

        var req = {
            id: '',
            userType : 'P'
        }

        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <View style={{flex:1, backgroundColor: '#ffffff'}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderBeauty}
                    style={styles.listView}
                />
                <ActionButton
                  buttonColor="#F06292">
                    <ActionButton.Item buttonColor='#F48FB1' title="미용 요청" onPress={()=>Actions.beautyRequests({req: req})}>
                        <Image
                            source={require('../../../../assets/img/ic_description.jpg')}
                            style={{width: 20, height:20}}
                        />
                    </ActionButton.Item>
                </ActionButton>
            </View>
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

        var req = {
            id : beauty.id,
            regUserId : beauty.regUserId,
            userType : 'P'
        }

        return (
            <TouchableWithoutFeedback onPress={()=>Actions.beautyRequests({req: req})}>
                <View style={styles.container} >
                    <View style={{flexDirection: 'row', height:100}}>
                        <Image
                            source={require('../../../../assets/img/dog1.jpg')}
                            style={{width: 100, height:100, borderRadius: 5}}
                        />
                        <View style={{flex:1, flexDirection: 'column'}}>
                            <View style={{paddingTop:7, paddingRight:10, alignItems:'flex-end'}}>
                                <View style={{width:50, backgroundColor:beauty.sancStatCd == 'C' ? '#FBC02D' : '#388E3C', alignItems:'center'}}>
                                    <Text style={{fontSize: 12, textAlign:'right', color: '#ffffff'}}>
                                        {beauty.sancStatCd == 'C' ? '진행중' : '진행완료'}
                                    </Text>
                                </View>
                            </View>
                            <View style={{marginTop:10, marginBottom:2}}>
                                <Text style={{fontSize: 16, color: '#101010', left: 10, fontWeight:'400'}}>{beauty.etc}</Text>
                            </View>
                            <Text style={{fontSize: 12, color: '#101010', left: 10}}>{beauty.breed} ({beauty.weight} Kg)</Text>
                            <Text style={styles.regDtm}>{beauty.regDtm}</Text>
                        </View>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };
}

var styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        marginTop: 5,
        marginLeft:5,
        marginRight:7,
        borderRadius: 5,
        backgroundColor:'#FAFAFA'
    },

    etc: {
        fontSize: 10,
        color: '#101010',
        left: 10
    },

    regDtm: {
        fontSize: 12,
        color: '#787878',
        left: 10
    },

    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
})

module.exports = Beauty;