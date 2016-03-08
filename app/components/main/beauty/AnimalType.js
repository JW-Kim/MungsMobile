'use strict';

var React = require('react-native');
var {View, Text, ListView, TouchableWithoutFeedback} = React;
var Animals = require('./animal.json');

var CircleCheckBox = require('react-native-circle-checkbox');

class AnimalType extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };

    }

    componentDidMount(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(Animals.animalType)
        });
    }

    render(){
        return(
            <View style={{flexDirection:'column'}}>
                <View style={{height:45, backgroundColor: '#383838', flexDirection:'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, color:'#fff', textAlign:'center', fontWeight:'bold'}}>동물 종류</Text>
                </View>
                <View style={{height: 155}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderAnimalType}
                    />
                </View>
            </View>
        )
    }

    renderAnimalType(animal){
        return(
            <TouchableWithoutFeedback>
                <View style={{flexDirection:'row', height: 50, alignItems: 'center', paddingLeft:10}}>
                    <CircleCheckBox
                        checked={true}
                        outerSize = {16}
                        innerSize = {10}
                    />
                    <Text style={{marginLeft:10 }}>{animal.coNm}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}    
    
module.exports = AnimalType;    