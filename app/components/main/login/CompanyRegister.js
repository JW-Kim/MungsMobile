var React = require('react-native');
var {View, StyleSheet, Text, TouchableHighlight} = React;

var Actions = require('react-native-router-flux').Actions;
var Icon = require('react-native-vector-icons/MaterialIcons');
var Modal   = require('react-native-modalbox');

var CompanyRegisterDetail = require('./CompanyRegisterDetail.js');
var Region = require('../beauty/Region');

class CompanyRegister extends React.Component {

    constructor(props, context) {
        super(props, context);
    };

    render(){
        return(
            <View style={{flex:1, flexDirection:'column', backgroundColor:'#ffffff'}}>
                <View style={{flexDirection: 'row', backgroundColor: '#B2EBF2',height : 45,alignItems: 'center'}}>
                    <TouchableHighlight onPress={Actions.pop} style={{width: 45}} underlayColor={'#E0F7FA'}>
                        <View style={{width:45, height:45, alignItems: 'center', justifyContent: 'center'}}>
                            <Icon name='chevron-left' size={30} color='#00BCD4'/>
                        </View>
                    </TouchableHighlight>
                    <Text style={{color:'#00BCD4', flex: 1, textAlign:'center',fontWeight:'bold'}}>업체 등록</Text>
                    <View style={{width:45}}></View>
                </View>
                <CompanyRegisterDetail openRegionModal={this._openRegionModal.bind(this)}/>

                <Modal style={[styles.modal], {flex:1}} position={"center"} ref={"regionModal"} swipeToClose={false}>
                    <Region closeRegionModal={this._closeRegionModal.bind(this)}/>
                </Modal>
            </View>
        )
    }

    _openRegionModal(){
        this.refs.regionModal.open();
    }

    _closeRegionModal(){
        this.refs.regionModal.close();
    }
}

var styles = StyleSheet.create({

})

module.exports = CompanyRegister;