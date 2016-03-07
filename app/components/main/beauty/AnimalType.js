'use strict';

var React = require('react-native');
var {View, Text} = React;

class AnimalType extends React.Component {
    
    constructor(props) {
        super(props);

    }
    
    render(){
        return(
            <View style={{borderColor:'red'}}>
                <Text>Animal</Text>
            </View>
        )
    }
}    

    
module.exports = AnimalType;    