'use strict';

var React = require('react-native');
var {View, Text} = React;

const Icon = require('react-native-vector-icons/MaterialIcons');

class Star extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){

    }

    render(){
        return(
            <View style={{flex:1, flexDirection:'row'}}>
                <Icon name={'grade'} size={15} color='#FB8C00'/>
                <Icon name={'grade'} size={15} color='#FB8C00'/>
                <Icon name={'grade'} size={15} color='#FB8C00'/>
                <Icon name={'grade'} size={15} color='#BDBDBD'/>
                <Icon name={'grade'} size={15} color='#BDBDBD'/>
                <Text style={{marginLeft:5, fontSize:13, fontWeight:'bold'}}>3점</Text>
            </View>
        )
    }

}

module.exports = Star;