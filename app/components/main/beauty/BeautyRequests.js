'use strict';

var React = require('react-native');
var Actions = require('react-native-router-flux').Actions;
var {View, Text, StyleSheet, TouchableHighlight, Image, TextInput, ScrollView} = React;
var Modal   = require('react-native-modalbox');
var Button = require('react-native-button');
var Accordion = require('react-native-collapsible/Accordion');

var AppStore = require('../../../stores/AppStore');
var AppActions = require('../../../actions/AppActions');

var CompanyList = require('./CompanyList');
var AnimalType = require('./AnimalType');
var Breed = require('./Breed');
var Region = require('./Region');
var CompanyDetail = require('../com/CompanyDetail');

var _scrollToBottomY

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
        console.log('req1', this.props.req);
        AppStore.addChangeListener(this._onTypeChange);
    }

    chgTypeModal(typeCd){
        console.log('typeCd', typeCd)
        AppActions.setTypeCd(typeCd);
    }

    _onTypeChange(){
         this.setState(_getType());
    }

    _send(){

    }

    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={styles.headerContainer}>
                    <TouchableHighlight onPress={Actions.pop} style={{width: 30}}>
                        <View style={{height: 50, width: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                source={require('../../../../assets/img/ic_navigate_before.png')}
                                style={{height: 30, width: 30}}
                            />
                        </View>
                    </TouchableHighlight>
                    <Text style={styles.title}>미용 요청서</Text>
                    <Text style={styles.back}></Text>
                </View>

                <ScrollView ref='_scrollView'
                    onContentSizeChange={(newSize)=>{
                        _scrollToBottomY = newSize;
                    }}>
                    <View style={{backgroundColor: '#E0E0E0',height: 150, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={require('../../../../assets/img/ic_add_a_photo_white.jpg')}
                            style={{height: 50, width: 50}}
                        />
                    </View>
                    <View style={styles.content}>
                        <View style={{flexDirection: 'row',height:20}}>
                            <Text style={{marginLeft: 15, fontWeight:'bold'}}>동물 종류 </Text><Text style={{color:'#B71C1C'}}>*</Text>
                        </View>
                        <TouchableHighlight onPress={this._openAnimalTypeModal.bind(this)} underlayColor='#c0c0c0'>
                            <View style={styles.type}>
                                <View style={{flex:6}}>
                                    <Text style={{marginLeft:10, marginTop:12}}>
                                        원하는 동물을 선택하세요.
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

                        <View style={{flexDirection: 'row',height:20, marginTop: 10}}>
                            <Text style={{marginLeft: 15, fontWeight:'bold'}}>품 종 </Text><Text style={{color:'#B71C1C'}}>*</Text>
                        </View>
                        <TouchableHighlight onPress={this._openBreedModal.bind(this)} underlayColor='#c0c0c0'>
                            <View style={styles.type}>
                                <View style={{flex:6}}>
                                    <Text style={{marginLeft:10, marginTop:12}}>
                                        품종을 선택하세요. {this.state.typeCd}
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

                        <View style={{flexDirection: 'row',height:20, marginTop: 10}}>
                            <Text style={{marginLeft: 15, fontWeight:'bold'}}>몸무게 </Text><Text style={{color:'#B71C1C'}}>*</Text>
                        </View>
                        <View style={{flexDirection:'row', }}>
                            <TextInput
                                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:10, width:100}}
                                onChangeText={(weight) => this.setState({weight})}
                                value={this.state.weight}
                                placeholder='(예 2.5)'
                             />
                             <View style={{marginLeft:5, marginTop:15}}><Text>Kg</Text></View>
                         </View>

                        <View style={{flexDirection: 'row',height:20, marginTop: 10}}>
                             <Text style={{marginLeft: 15, fontWeight:'bold'}}>지역 선택 </Text><Text style={{color:'#B71C1C'}}>*</Text>
                        </View>
                        <TouchableHighlight onPress={this._openRegionModal.bind(this)} underlayColor='#c0c0c0'>
                            <View style={styles.type}>
                                <View style={{flex:6}}>
                                    <Text style={{marginLeft:10, marginTop:12}}>
                                        지역을 선택하세요. {this.state.typeCd}
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

                        <View style={{flexDirection: 'row',height:20, marginTop: 10}}>
                             <Text style={{marginLeft: 15, fontWeight:'bold'}}>스타일 </Text><Text style={{color:'#B71C1C'}}>*</Text>
                        </View>

                        <View style={{flexDirection: 'row',height:20, marginTop: 10}}>
                             <Text style={{marginLeft: 15, fontWeight:'bold'}}>요구사항 </Text><Text style={{color:'#B71C1C'}}>*</Text>
                        </View>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:10, marginRight:10}}
                            onChangeText={(requirements) => this.setState({requirements})}
                            value={this.state.requirements}
                            placeholder='(예 : 부분 염색해주세요 )'
                         />
                    </View>

                    <Button containerStyle={{marginTop: 15, marginBottom:5, marginLeft:5, marginRight:5,
                                            padding: this.props.req.id == '' ? 10 : 0,
                                            height:this.props.req.id == '' ? 45 : 0, overflow:'hidden', borderRadius:4, backgroundColor: '#03A9F4'}}
                            style={{fontSize: 15, color: 'white', height:this.props.req.id == '' ? 45 : 0}}
                            onPress={this._send}>
                        미용 요청하기
                    </Button>

                    <Accordion
                        sections={[{title:'입찰한 업체 리스트 (4건)'}]}
                        renderHeader={this._renderHeader.bind(this)}
                        renderContent={this._renderContent.bind(this)}
                        onChange={this._chgAccordion.bind(this)}
                    />

                </ScrollView>

                <Modal style={[styles.modal], {height: 200}} position={"center"} ref={"animalTypeModal"} >
                    <AnimalType/>
                </Modal>

                <Modal style={[styles.modal], {height: 200}} position={"center"} ref={"breedModal"} >
                    <Breed/>
                </Modal>

                <Modal style={[styles.modal], {flex:1}} position={"center"} ref={"regionModal"} swipeToClose={false}>
                    <Region closeRegionModal={this._closeRegionModal.bind(this)}/>
                </Modal>

                <Modal style={[styles.modal], {flex:1}} position={"center"} ref={"companyDetailModal"} swipeToClose={false}>
                    <CompanyDetail closeCompanyDetailModal={this._closeCompanyDetailModal.bind(this)}/>
                </Modal>

                <Modal style={[styles.modal, styles.typeModal]} position={"center"} ref={"typeModal"} >
                    <TouchableHighlight onPress={this.chgTypeModal.bind(this, '2')}>
                        <Text>ㅎㅎ</Text>
                    </TouchableHighlight>
                </Modal>
            </View>
        )
    }

    _renderHeader(section, i, isActive){
        return(
            <View style={{flexDirection:'row', height: this.props.req.id == '' ? 0 : 50, alignItems: 'center', paddingLeft:10, borderWidth:1, borderColor:'#29B6F6', backgroundColor:'#81D4FA'}}>
               <Image
                    source={require('../../../../assets/img/ic_group.jpg')}
                    style={{height:this.props.req.id == '' ? 0 : 20,width: 20, marginLeft: 15}}
                />
                <Text style={{marginLeft:10, height:this.props.req.id == '' ? 0 : 20 }}>{section.title}</Text>
            </View>
        )
    }

    _renderContent(section, i, isActive){
        return(
            <CompanyList req={this.props.req} openCompanyDetailModal={this._openCompanyDetailModal.bind(this)}/>
        )
    }

    _chgAccordion(index){
        setTimeout(() => {this.refs._scrollView.scrollTo(_scrollToBottomY);},100
        );
    }

    openTypeModal() {
        this.refs.typeModal.open();
    }

    _openAnimalTypeModal(){
        this.refs.animalTypeModal.open();
    }

    _openBreedModal(){
        this.refs.breedModal.open();
    }

    _openRegionModal(){
        this.refs.regionModal.open();
    }

    _openCompanyDetailModal(){
        this.refs.companyDetailModal.open();
    }


    _closeRegionModal(){
        this.refs.regionModal.close();
    }
    _closeCompanyDetailModal(){
        this.refs.companyDetailModal.close();
    }
}

var styles = StyleSheet.create({

   headerContainer: {
        flexDirection: 'row'
        ,backgroundColor: '#0277BD'
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

    ,content:{
        marginTop: 5
        ,flexDirection: 'column'
    }

    ,type: {
        flexDirection: 'row'
        ,flex:1
        ,height:50
        ,marginTop: 2
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
        height: 200
        ,backgroundColor: "#3B5998"
    }
})

module.exports = BeautyRequests;