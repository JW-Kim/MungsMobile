var React = require('react-native');
var {View, StyleSheet, Text, Image, TouchableHighlight} = React;
var Button = require('react-native-button');
var SplashScreen = require('@remobile/react-native-splashscreen');
var Actions = require('react-native-router-flux').Actions;
var Modal   = require('react-native-modalbox');
var Icon = require('react-native-vector-icons/MaterialIcons');

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

                <TouchableHighlight onPress={this._goToNaver.bind(this)}>
                    <Image
                        source={require('../../../../assets/img/naverLogin.jpg')}
                        style={{width:300, height:50}}
                    />
                </TouchableHighlight>
                <TouchableHighlight onPress={this._goToNaver.bind(this)} >
                    <Image
                        source={require('../../../../assets/img/cacaoLogin.jpg')}
                        style={{width:300, height:50, marginTop: 5}}
                    />
                </TouchableHighlight>
                    <TouchableHighlight onPress={this._goToNaver.bind(this)} >
                    <Image
                        source={require('../../../../assets/img/facebookLogin.jpg')}
                        style={{width:300, height:50, marginTop: 5}}
                    />
                </TouchableHighlight>

                <Modal style={[styles.modal, {width: 250, height:140, borderRadius:5, backgroundColor:'#FAFAFA'}]} position={"center"} ref={"userTypeModal"} backdropPressToClose={false} swipeToClose={false} >
                    <View style={{flex:1, flexDirection:'row', justifyContent: 'center',  alignItems: 'center'}}>
                        <TouchableHighlight onPress={this._goToPerson.bind(this)}>
                            <View style={{height:100, width:100, margin: 5, backgroundColor:'#B2EBF2', borderRadius:5, justifyContent: 'center',  alignItems: 'center'}}>
                                 <Icon name='person' size={30} color='#00BCD4'/>
                                 <Text style={{color:'#00BCD4'}}>개인</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._goToCompany.bind(this)}>
                            <View style={{height:100, width:100, margin: 5, backgroundColor:'#B2EBF2', borderRadius:5,justifyContent: 'center',  alignItems: 'center'}}>
                                <Icon name='domain' size={30} color='#00BCD4'/>
                                <Text style={{color:'#00BCD4'}}>업체</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        );
    }

    _goToNaver(){
         this.refs.userTypeModal.open();
    }

    _goToPerson(){
        setTimeout(() => {Actions.main();});
    }

    _goToCompany(){
        setTimeout(() => {Actions.companyRegister();});
    }
}

var styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

module.exports = Login;