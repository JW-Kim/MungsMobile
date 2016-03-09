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
            <View style={{flexDirection:'column'}}>
                <View style={{height:45, backgroundColor: '#383838', flexDirection:'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, color:'#fff', textAlign:'center', fontWeight:'bold'}}>지역 선택</Text>
                </View>
                <ScrollView style={{height: 355}}>
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
            <View style={{flexDirection:'row', height: 50, alignItems: 'center', paddingLeft:10}}>
                <Text style={{marginLeft:10 }}>{section.coNm}</Text>
            </View>
        )
    }

    renderContent(section, i, isActive){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return(
            <GridView
                items={section.detail}
                itemsPerRow={4}
                renderItem={this.renderRegionList}
            />
        )
    }

    renderRegionList(region){
        return(
            <View style={{flex:1, flexDirection:'row', height: 30, alignItems: 'center', backgroundColor:'#F5F5F5'}}>
                <Text>{region.coNm}</Text>
            </View>
        )
    }
}

module.exports = Region;