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
            <View style={{  height:this.props.req.id == '' ? 0 : 200,
                            flexDirection: 'column'}}>
                <View style={{  height:this.props.req.id == '' ? 0 : 20
                                ,marginTop:this.props.req.id == '' ? 0 : 10
                                ,flexDirection: 'row'}}>
                    <Image
                        source={require('../../../../assets/img/ic_group.jpg')}
                        style={{height:this.props.req.id == '' ? 0 : 20,
                                width: 20, marginLeft: 15}}
                    />
                    <Text style={{  height:this.props.req.id == '' ? 0 : 20,
                                    fontWeight:'bold', marginLeft: 5}}>입찰한 업체 리스트</Text>
                </View>
                <View style={{  height:this.props.req.id == '' ? 0 : 160
                                ,borderWidth:this.props.req.id == '' ? 0 : 2
                                ,marginTop: 2, marginRight:10, marginLeft:10
                                , borderColor:'#a9a9a9', borderRadius: 5
                                ,backgroundColor:'#E0E0E0'}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderCompany}
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
                    <Text style={{flex:1, fontSize: 15,  color: '#101010'}}>{company.price}원</Text>
                    <Button containerStyle={{flex:0.5, height: 25, borderRadius:4, backgroundColor: '#616161', marginRight: 5}}
                            style={{fontSize: 15, color: 'white', height:25}}>
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