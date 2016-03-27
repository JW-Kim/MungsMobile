'use strict';

var React = require('react-native');
var {View, Text, ListView, TouchableWithoutFeedback, ScrollView} = React;
var Regions = require('./regionType.json');

var CircleCheckBox = require('react-native-circle-checkbox');
var Accordion = require('react-native-collapsible/Accordion');
var GridView = require('react-native-grid-view');

class Region extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){

    }

    render(){
        return(
            <View style={{flex:1, flexDirection:'column'}}>
                <View style={{height:45, backgroundColor: '#B2EBF2', flexDirection:'row', alignItems: 'center'}}>
                    <View style={{width:50}}></View>
                    <Text style={{flex: 1, color:'#00BCD4', textAlign:'center', fontWeight:'bold'}}>지역 선택</Text>
                    <Text style={{width:50, color:'#00BCD4'}} onPress={this.props.closeRegionModal}>닫기</Text>
                </View>
                <ScrollView style={{flex: 1}}>
                    <Accordion
                        sections={Regions.regionList}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        renderRegionList={this.renderRegionList}
                    />
                </ScrollView>
            </View>
        )
    }

    renderHeader(section, i, isActive){
        return(
            <View style={{flexDirection:'row', height: 50, alignItems: 'center', paddingLeft:10, borderWidth:0.5, borderColor:'#E0F7FA'}}>
                <Text style={{marginLeft:10 }}>{section.coNm}</Text>
            </View>
        )
    }

    renderContent(section, i, isActive){
        return(
            <GridView
                items={section.detail}
                itemsPerRow={3}
                renderItem={this.renderRegionList}
            />
        )
    }

    renderRegionList(region){
        return(
            <View style={{  flex:1, flexDirection:'row', height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor:'#FAFAFA',
                            borderWidth:0.5, borderColor:'#E0F7FA'}} key={region.coCd}>
                <Text style={{}}>{region.coNm}</Text>
            </View>
        )
    }

}

module.exports = Region;