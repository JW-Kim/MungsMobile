'use strict';

var React = require('react-native');
var Actions = require('react-native-router-flux').Actions;
var {View, Text, StyleSheet, TouchableHighlight} = React;
var Modal   = require('react-native-modalbox');

var AppStore = require('../../../stores/AppStore');
var AppActions = require('../../../actions/AppActions');

function _getType() {
    return {
        typeCd: AppStore.getTypeCd()
    };
}

class BeautyRequests extends React.Component {

    constructor(props) {
        super(props);

        this.state = _getType();

        this._onTypeChange = this._onTypeChange.bind(this);
    }

    componentDidMount(){
        AppStore.addChangeListener(this._onTypeChange);
    }

    openTypeModal() {
        this.refs.typeModal.open();
    }

    chgTypeModal(typeCd){
        AppActions.setTypeCd('2');
    }

    _onTypeChange(){
         this.setState(_getType());
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <View style={styles.headerContainer}>
                    <Text style={styles.back} onPress={Actions.pop}>뒤로</Text>
                    <Text style={styles.title}>미용 요청서</Text>
                    <Text style={styles.back}></Text>
                </View>
                <View style={styles.image}>
                </View>
                <View style={styles.content}>
                    <TouchableHighlight onPress={this.openTypeModal.bind(this)} underlayColor='#c0c0c0'>
                        <View style={styles.type}>
                            <View style={{flex:6}}>
                                <Text style={{marginLeft:10, marginTop:12}}>
                                    원하는 동물을 선택하세요.
                                </Text>
                            </View>
                            <View style={{flex:1, borderLeftWidth :1 ,borderLeftColor:'#a9a9a9'}}>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.openTypeModal.bind(this)} underlayColor='#c0c0c0'>
                        <View style={styles.type}>
                            <View style={{flex:6}}>
                                <Text style={{marginLeft:10, marginTop:12}}>
                                    품종을 선택하세요. {this.state.typeCd}
                                </Text>
                            </View>
                            <View style={{flex:1, borderLeftWidth :1 ,borderLeftColor:'#a9a9a9'}}>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>

                <Modal style={[styles.modal, styles.typeModal]} position={"center"} ref={"typeModal"} >
                    <TouchableHighlight onPress={this.chgTypeModal.bind('2')}>
                        <Text>Modal centered</Text>
                    </TouchableHighlight>
                </Modal>

            </View>
        )
    }
}

var styles = StyleSheet.create({

   headerContainer: {
        flexDirection: 'row'
        ,backgroundColor: '#383838'
        ,height : 45
        ,alignItems: 'center'
    }

    ,back: {
        width: 30
        ,color:'#fff'
    }

    ,title: {
        flex: 1
        ,color:'#fff'
        ,textAlign:'center'
        ,fontWeight:'bold'
    }

    ,image: {
        backgroundColor: '#E0E0E0'
        ,height: 150
    }

    ,content:{
        marginTop: 5
        ,flexDirection: 'column'
    }

    ,type: {
        flexDirection: 'row'
        ,flex:1
        ,height:50
        ,marginTop: 5
        ,marginRight:10
        ,marginLeft:10
        ,borderWidth:1
        ,borderColor:'#a9a9a9'
        ,borderRadius: 10
    }

    ,modal: {
        justifyContent: 'center',
        alignItems: 'center'
    }

    ,typeModal: {
        height: 100
        ,backgroundColor: "#3B5998"
    }
})

module.exports = BeautyRequests;