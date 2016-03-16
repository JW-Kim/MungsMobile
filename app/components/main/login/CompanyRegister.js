var React = require('react-native');
var {View, StyleSheet, Text} = React;

var Actions = require('react-native-router-flux').Actions;

class CompanyRegister extends React.Component {

    constructor(props, context) {
        super(props, context);
    };

    render(){
        return(
            <View style={{flex:1, flexDirection:'column'}}>
                <View style={{}}>
                    <Text></Text>
                </View>
            </View>
        )
    }

    _goToNaver(){
         setTimeout(
            () => {Actions.main();}
         )
    }
}

module.exports = CompanyRegister;