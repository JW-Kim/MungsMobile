'use strict';

var React = require('react-native');
var {View, Text, StyleSheet, Image, ListView, TouchableWithoutFeedback, TouchableHighlight} = React;

var Actions = require('react-native-router-flux').Actions;
var Button = require('react-native-button');
const Icon = require('react-native-vector-icons/MaterialIcons');

var Companies = require('./company.json');
var CompanyDetail = require('./CompanyDetail.js');

class CompanyList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    }

    componentDidMount(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(Companies.companyList),
            loaded: true,
        });
    }

    render(){
        return(
            <View style={{flex:1, flexDirection:'column', backgroundColor:'#ffffff'}}>

                <View style={{flexDirection: 'row', backgroundColor: '#B2EBF2',height : 45,alignItems: 'center'}}>
                    <TouchableHighlight onPress={Actions.pop} style={{width: 45}} underlayColor={'#E0F7FA'}>
                        <View style={{width:45, height:45, alignItems: 'center', justifyContent: 'center'}}>
                            <Icon name='chevron-left' size={30} color='#00BCD4'/>
                        </View>
                    </TouchableHighlight>
                    <Text style={{color:'#00BCD4', flex: 1, textAlign:'center',fontWeight:'bold'}}>업체 등록</Text>
                    <View style={{width:45}}></View>
                </View>

                <View style={{flex:1}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderCompany.bind(this)}
                    />
                </View>
            </View>
        )
    }

    _renderCompany(company){
        return(
            <CompanyDetail/>
        )
    }
}

var styles = StyleSheet.create({

})

module.exports = CompanyList;