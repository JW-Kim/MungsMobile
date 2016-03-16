var React = require('react-native');
var {View, StyleSheet, Text, Image, TouchableHighlight} = React;
var Button = require('react-native-button');
var SplashScreen = require('@remobile/react-native-splashscreen');
var Actions = require('react-native-router-flux').Actions;

class Login extends React.Component {

    constructor(props, context) {
        super(props, context);
    };

    componentDidMount() {
        SplashScreen.hide();
    };

    render(){
        return (
            <View style={{flex: 1, flexDirection: 'column',backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{flexDirection:'row', marginTop:100, marginBottom: 200}}>
                    <Image
                        source={require('../../../../assets/img/logo.jpg')}
                        style={{width: 181, height:37}}
                    />
                </View>

                <TouchableHighlight onPress={this._goToNaver}>
                    <Image
                        source={require('../../../../assets/img/naverLogin.jpg')}
                        style={{width:300, height:50}}
                    />
                </TouchableHighlight>
                <TouchableHighlight onPress={this._goToNaver} >
                    <Image
                        source={require('../../../../assets/img/cacaoLogin.jpg')}
                        style={{width:300, height:50, marginTop: 5}}
                    />
                </TouchableHighlight>
                    <TouchableHighlight onPress={this._goToNaver} >
                    <Image
                        source={require('../../../../assets/img/facebookLogin.jpg')}
                        style={{width:300, height:50, marginTop: 5}}
                    />
                </TouchableHighlight>

            </View>
        );
    }

    _goToNaver(){
        setTimeout(
            () => {Actions.main();});
    }
}

var styles = StyleSheet.create({

})

module.exports = Login;