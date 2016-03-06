'use strict';

var React = require('react-native');
var {View, Text, StyleSheet, Image, ListView, TouchableWithoutFeedback} = React;
var Companies = require('./company.json');

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
                <View style={{flexDirection:'row'}}>
                    <Text>{company.companyNm}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

var styles = StyleSheet.create({

})

module.exports = CompanyList;