'use strict';

var React = require('react-native');
var {StyleSheet, ScrollView, View, Text, TouchableWithoutFeedback, Image} = React;

var Star = require('./Star.js');

const Icon = require('react-native-vector-icons/MaterialIcons');

class StoreDetail extends React.Component {

    constructor(props, context) {
        super(props, context);
    };

    render(){
        var containerWidth = this.props.containerWidth;

        return(
            <TouchableWithoutFeedback>
                <View style={{flex:1, marginTop: 10, marginLeft:5, marginRight:7}}>
                    <View style={{flex:1, flexDirection:'column', borderRadius: 5, backgroundColor:'#FAFAFA'}}>
                        <Image
                            source={require('../../../../assets/img/company1.jpg')}
                            style={{width:containerWidth ,height:250, borderRadius: 5}}
                            resizeMode={Image.resizeMode.stretch}
                        />
                        <View style={{height:100, flexDirection:'row', marginTop:5}}>
                            <View style={{flex:1, flexDirection:'column', alignItems: 'center', paddingTop:10}}>
                                 <View style={{height:50, width:50}}>
                                     <Image
                                        source={require('../../../../assets/img/profile.jpg')}
                                        style={{height:50, width:50, borderRadius: 50}} />
                                 </View>
                                 <Text style={{fontSize:10, fontWeight:'bold'}}>
                                    박신혜
                                 </Text>
                            </View>
                            <View style={{flex:3, flexDirection:'column', paddingTop:10, paddingLeft:10}}>
                                <View style={{flexDirection:'row', alignItems: 'center'}}>
                                    <Text style={{fontSize:15, fontWeight:'bold', marginRight:3}}>BABY PET SHOP</Text>
                                    <Icon name={'content-cut'} size={15} color='#FB8C00'/>
                                </View>
                                <Text style={{fontSize:10, color:'#BDBDBD', marginTop:5, marginBottom:10}}>BABY PET SHOP은 강아지 입양에서 부터 사후 관리까지...</Text>
                                <Star/>
                            </View>
                        </View>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

var styles = StyleSheet.create({

})

module.exports = StoreDetail;
