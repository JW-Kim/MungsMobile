var React = require('react-native');
var {View, StyleSheet, Text, ScrollView, Image, TextInput, TouchableHighlight} = React;

var Actions = require('react-native-router-flux').Actions;
var Icon = require('react-native-vector-icons/MaterialIcons');
var Button = require('react-native-button');
var CircleCheckBox = require('react-native-circle-checkbox');

class CompanyRegisterDetail extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            coNm : ''
        }
    };

    render(){
        return(
            <ScrollView style={{flex:1, flexDirection:'column', marginTop:5, marginLeft:5, marginRight:7}}>
                <View style={{backgroundColor: '#E0E0E0',height: 150, justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={require('../../../../assets/img/ic_add_a_photo_white.jpg')}
                        style={{height: 50, width: 50}}
                    />
                </View>

                <View style={{height:50, marginTop:5, backgroundColor:'#FAFAFA'}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width:80, flexDirection:'row'}}>
                            <Text style={{marginLeft: 15, fontWeight:'bold'}}>상호명 </Text>
                            <Text style={{color:'#B71C1C'}}>*</Text>
                        </View>
                        <TextInput
                            style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:10, marginRight:10}}
                            onChangeText={(coNm) => this.setState({coNm})}
                            value={this.state.coNm}
                            placeholder='(예 Blue Mungs, 블루멍스)'
                            placeholderTextColor='#BDBDBD'
                        />
                    </View>
                </View>

                <View style={{height:50, marginTop:5, backgroundColor:'#FAFAFA'}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width:80, flexDirection:'row'}}>
                            <Text style={{marginLeft: 15, fontWeight:'bold'}}>대표자명 </Text>
                            <Text style={{color:'#B71C1C'}}>*</Text>
                        </View>
                        <TextInput
                            style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:10, marginRight:10}}
                            onChangeText={(coNm) => this.setState({coNm})}
                            value={this.state.coNm}
                            placeholder='(예 홍길동)'
                            placeholderTextColor='#BDBDBD'
                        />
                    </View>
                </View>

                <View style={{height:50, marginTop:5, backgroundColor:'#FAFAFA'}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width:120, flexDirection:'row'}}>
                            <Text style={{marginLeft: 15, fontWeight:'bold'}}>사업자등록번호 </Text>
                            <Text style={{color:'#B71C1C'}}>*</Text>
                        </View>
                        <TextInput
                            style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:10, marginRight:10}}
                            onChangeText={(coNm) => this.setState({coNm})}
                            value={this.state.coNm}
                            placeholder='(-)없이 입력해주세요'
                            placeholderTextColor='#BDBDBD'
                        />
                    </View>
                </View>

                <View style={{height:100, flexDirection:'column', marginTop:5, backgroundColor:'#FAFAFA'}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width:80, flexDirection:'row'}}>
                            <Text style={{marginLeft: 15, fontWeight:'bold'}}>전화번호 </Text>
                        </View>
                        <TextInput
                            style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:10, marginRight:10}}
                            onChangeText={(coNm) => this.setState({coNm})}
                            value={this.state.coNm}
                            placeholder='02'
                            placeholderTextColor='#BDBDBD'
                        />
                        <Text>-</Text>
                        <TextInput
                            style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:10, marginRight:10}}
                            onChangeText={(coNm) => this.setState({coNm})}
                            value={this.state.coNm}
                            placeholder='000'
                            placeholderTextColor='#BDBDBD'
                        />
                        <Text>-</Text>
                        <TextInput
                            style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:10, marginRight:10}}
                            onChangeText={(coNm) => this.setState({coNm})}
                            value={this.state.coNm}
                            placeholder='0000'
                            placeholderTextColor='#BDBDBD'
                        />
                    </View>
                    <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width:80, flexDirection:'row'}}>
                            <Text style={{marginLeft: 15, fontWeight:'bold'}}>휴대폰 </Text>
                            <Text style={{color:'#B71C1C'}}>*</Text>
                        </View>
                        <TextInput
                            style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:10, marginRight:10}}
                            onChangeText={(coNm) => this.setState({coNm})}
                            value={this.state.coNm}
                            placeholder='010'
                            placeholderTextColor='#BDBDBD'
                        />
                        <Text>-</Text>
                        <TextInput
                            style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:10, marginRight:10}}
                            onChangeText={(coNm) => this.setState({coNm})}
                            value={this.state.coNm}
                            placeholder='000'
                            placeholderTextColor='#BDBDBD'
                        />
                        <Text>-</Text>
                        <TextInput
                            style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:10, marginRight:10}}
                            onChangeText={(coNm) => this.setState({coNm})}
                            value={this.state.coNm}
                            placeholder='0000'
                            placeholderTextColor='#BDBDBD'
                        />
                    </View>
                </View>

                <View style={{height:100, flexDirection:'column',marginTop:5, backgroundColor:'#FAFAFA'}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width:80, flexDirection:'row'}}>
                            <Text style={{marginLeft: 15, fontWeight:'bold'}}>주소 </Text>
                            <Text style={{color:'#B71C1C'}}>*</Text>
                        </View>
                        <TouchableHighlight onPress={this.props.openRegionModal.bind(this)} underlayColor='#c0c0c0' style={{flex:1}}>
                            <View style={{flex:1, flexDirection: 'row', height:40, alignItems: 'center', marginRight:10
                                          ,borderWidth:1, borderColor:'#a9a9a9', borderRadius: 10 }}>
                                <View style={{flex:6, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{}}>
                                        지역을 선택하세요.
                                    </Text>
                                </View>
                                <View style={{flex:1, borderLeftWidth :1 ,borderLeftColor:'#a9a9a9', justifyContent: 'center', alignItems: 'center'}}>
                                    <Image
                                        source={require('../../../../assets/img/ic_arrow_drop_down_black.jpg')}
                                        style={{height: 30, width: 30}}
                                    />
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:1, flexDirection:'row', alignItems: 'center'}}>
                        <View style={{width:80, flexDirection:'row'}}>
                            <Text style={{marginLeft: 15, fontWeight:'bold'}}>상세주소 </Text>
                            <Text style={{color:'#B71C1C'}}>*</Text>
                        </View>
                        <TextInput
                            style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:10, marginRight:10}}
                            onChangeText={(coNm) => this.setState({coNm})}
                            value={this.state.coNm}
                            placeholder='(예 둔촌동 주공아파트 111동 504호)'
                            placeholderTextColor='#BDBDBD'
                        />
                    </View>
                </View>

                <View style={{height:50, flexDirection:'column',marginTop:5, backgroundColor:'#FAFAFA'}}>
                    <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width:80, flexDirection:'row'}}>
                            <Text style={{marginLeft: 15, fontWeight:'bold'}}>타입 </Text>
                            <Text style={{color:'#B71C1C'}}>*</Text>
                        </View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <CircleCheckBox
                                checked={true}
                                outerSize = {16}
                                innerSize = {10}
                                onToggle={(checked) => console.log('My state is: ', checked)}
                            />
                            <Text style={{marginLeft:10 }}>미용</Text>
                        </View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <CircleCheckBox
                                checked={true}
                                outerSize = {16}
                                innerSize = {10}
                                onToggle={(checked) => console.log('My state is: ', checked)}
                            />
                            <Text style={{marginLeft:10 }}>병원</Text>
                        </View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <CircleCheckBox
                                checked={true}
                                outerSize = {16}
                                innerSize = {10}
                                onToggle={(checked) => console.log('My state is: ', checked)}
                            />
                            <Text style={{marginLeft:10 }}>호텔</Text>
                        </View>
                    </View>
                </View>

                <View style={{height:100, marginTop:5, backgroundColor:'#FAFAFA'}}>
                    <View style={{flex:1, flexDirection: 'column'}}>
                        <View style={{width:40, flexDirection:'row'}}>
                            <Text style={{marginLeft: 15, fontWeight:'bold'}}>업체 소개 </Text>
                            <Text style={{color:'#B71C1C'}}>*</Text>
                        </View>
                        <TextInput
                            style={{flex:1, height: 80, borderColor: 'gray', borderWidth: 1, marginLeft:10, marginRight:10}}
                            onChangeText={(coNm) => this.setState({coNm})}
                            value={this.state.coNm}
                            multiline={true}
                            placeholder='(예 BABY PET SHOP은 강아지 입양에서 부터 사후 관리까지 철저히 보장받을수있도록 100% 책임미용 서비스를 시행하고 있습니다.)'
                            placeholderTextColor='#BDBDBD'
                        />
                    </View>
                </View>

                <Button containerStyle={{marginTop: 15, marginBottom:5, marginLeft:5, marginRight:5,
                                        padding: 10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#00BCD4'}}
                        style={{fontSize: 15, color: 'white', height:45}}
                        onPress={this._saveCompany.bind(this)}>
                    업체등록하기
                </Button>
            </ScrollView>
        )
    }

    _saveCompany(){
        setTimeout(() => {Actions.main();});
    }
}

var styles = StyleSheet.create({

})

module.exports = CompanyRegisterDetail;