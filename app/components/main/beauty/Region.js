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
                <View style={{height:45, backgroundColor: '#0277BD', flexDirection:'row', alignItems: 'center'}}>
                    <View style={{width:50}}></View>
                    <Text style={{flex: 1, color:'#fff', textAlign:'center', fontWeight:'bold'}}>지역 선택</Text>
                    <Text style={{width:50, color:'#fff'}} onPress={this.props.closeRegionModal}>닫기</Text>
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
            <View style={{flexDirection:'row', height: 50, alignItems: 'center', paddingLeft:10, borderWidth:0.5, borderColor:'#a9a9a9'}}>
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
            <View style={{  flex:1, flexDirection:'row', height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor:'#F5F5F5',
                            borderWidth:0.5, borderColor:'#a9a9a9'}} key={region.coCd}>
                <Text style={{}}>{region.coNm}</Text>
            </View>
        )
    }

}

module.exports = Region;