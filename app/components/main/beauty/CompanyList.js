'use strict';

var React = require('react-native');
var {View, Text, StyleSheet, Image, ListView, TouchableWithoutFeedback} = React;
var Companies = require('./company.json');
var Button = require('react-native-button');

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
        if(this.props.req.id != ''){
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(Companies.companyList),
                loaded: true,
            });
        }
    }

    render(){
        return(
            <View style={{flexDirection: 'column'}}>
                <View style={{  borderWidth:this.props.req.id == '' ? 0 : 2
                                ,borderColor:'#B3E5FC'
                                ,backgroundColor:'#E1F5FE'}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderCompany.bind(this)}
                    />
                </View>

            </View>    
        )
    }

    renderCompany(company){
        return(
            <TouchableWithoutFeedback>
                <View style={{flexDirection:'row', marginTop:3}}>
                    <Text style={{flex:1,fontSize: 15, marginLeft:5,  color: '#101010'}}>{company.companyNm}</Text>
                    <View style={{flex:1, flexDirection:'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 15,  color: '#101010'}}>{company.price}원</Text>
                        <View style={{backgroundColor:'#F06292', marginLeft:10}}>
                            <Text style={{fontSize: 10,  color: '#ffffff'}}>추가서비스</Text>
                        </View>
                    </View>
                    <Button containerStyle={{flex:0.5, height: 25, borderRadius:4, backgroundColor: '#616161', marginRight: 5}}
                            style={{fontSize: 15, color: 'white', height:25}}
                            onPress={this.props.openCompanyDetailModal}>
                        상세보기
                    </Button>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

var styles = StyleSheet.create({

})

module.exports = CompanyList;