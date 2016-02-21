'use strict';

var React = require('react-native');
var Actions = require('react-native-router-flux').Actions;
var {View, Text, StyleSheet} = React;

import DropDown, {
    Select,
    Option,
    OptionList,
} from 'react-native-selectme';

class BeautyRequests extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            canada: ''
        };
    }

    _getOptionList() {
        return this.refs['OPTIONLIST'];
    }


    _canada(province) {

        this.setState({
            ...this.state,
            canada: province
        });
    }

    render(){
        return(
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.back} onPress={Actions.pop}>뒤로</Text>
                    <Text style={styles.title}>미용 요청서</Text>
                    <Text style={styles.back}></Text>
                </View>
                <View style={styles.image}>
                </View>
                <View style={styles.content}>
                    <Text style={styles.textType}>종 류  {this.state.canada}</Text>
                    <View style={styles.type}>
                        <Select
                            width={250}
                            height={40}
                            ref="SELECT1"
                            optionListRef={this._getOptionList.bind(this)}
                            defaultValue="원하는 동물을 선택하세요 ..."
                            onSelect={this._canada.bind(this)}>
                            <Option>개</Option>
                            <Option>고양이</Option>
                            <Option>Manitoba</Option>
                            <Option>New Brunswick</Option>
                            <Option>Newfoundland and Labrador</Option>
                            <Option>Northwest Territories</Option>
                            <Option>Nova Scotia</Option>
                            <Option>Nunavut</Option>
                            <Option>Ontario</Option>
                            <Option>Prince Edward Island</Option>
                            <Option>Quebec</Option>
                            <Option>Saskatchewan</Option>
                            <Option>Yukon</Option>
                        </Select>

                        <OptionList ref="OPTIONLIST"/>
                    </View>
                    <View>
                        <Text>종: </Text>
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({

   headerContainer: {
        flexDirection: 'row'
        ,backgroundColor: '#383838'
        ,height : 45
        ,alignItems: 'center'
    }

    ,back: {
        width: 30
        ,color:'#fff'
    }

    ,title: {
        flex: 1
        ,color:'#fff'
        ,textAlign:'center'
        ,fontWeight:'bold'
    }

    ,image: {
        backgroundColor: '#E0E0E0'
        ,height: 150
    }

    ,content:{
        flexDirection: 'column'
    }

    ,textType: {
        left: 20
        ,height: 20
    }

    ,type: {
        alignItems: 'center'
    }
})

module.exports = BeautyRequests;