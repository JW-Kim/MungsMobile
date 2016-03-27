'use strict';

var React = require('react-native');
var {StyleSheet, ScrollView, View, Text, TouchableWithoutFeedback, Image} = React;

var Actions = require('react-native-router-flux').Actions;
const Icon = require('react-native-vector-icons/MaterialIcons');

var Star = require('../store/Star.js');

class CompanyDetail extends React.Component {

    constructor(props, context) {
        super(props, context);
    };

    render(){
        var containerWidth = this.props.containerWidth;

        return(
            <TouchableWithoutFeedback  onPress={()=>Actions.companyDetail()}>
                <View style={{flex:1, marginTop: 10, marginLeft:5, marginRight:7}}>
                    <View style={{flex:1, flexDirection:'column', borderRadius: 5, backgroundColor:'#FAFAFA'}}>
                        <Image
                            source={require('../../../../assets/img/company1.jpg')}
                            style={{width:containerWidth ,height:250, borderRadius: 5}}
                            resizeMode={Image.resizeMode.stretch}
                        />
                        <View style={{height:120, flexDirection:'row', marginTop:5}}>
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
                                <View style={{flex:1, flexDirection:'row', alignItems: 'center'}}>
                                    <Text style={{fontSize:15, fontWeight:'bold', marginRight:3}}>BABY PET SHOP</Text>
                                    <Icon name={'content-cut'} size={15} color='#FB8C00'/>
                                    <Icon name={'local-hospital'} size={17} color='#F44336'/>
                                    <Icon name={'hotel'} size={17} color='#2E7D32' style={{marginLeft:2}}/>
                                </View>
                                <Star/>
                                <Text style={{flex:1, fontSize:11, fontWeight:'bold', color:'#BDBDBD', marginTop:5}}>입찰 금액 : 30,000 원</Text>
                                <Text style={{flex:1, fontSize:11, fontWeight:'bold', color:'#BDBDBD', marginBottom:5}}>추가 서비스 : 샹푸와 부분 염색 더해줄께요ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</Text>
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

module.exports = CompanyDetail;
