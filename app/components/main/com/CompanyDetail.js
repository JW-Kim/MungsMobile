var React = require('react-native');
var {View, Text, ScrollView, Dimensions, Image, TouchableHighlight} = React;

var ViewPager = require('react-native-viewpager');
var Actions = require('react-native-router-flux').Actions;
const Icon = require('react-native-vector-icons/MaterialIcons');

var deviceWidth = Dimensions.get('window').width;

var IMGS = [
    require('../../../../assets/img/company1.jpg'),
    require('../../../../assets/img/company2.jpg'),
    require('../../../../assets/img/company3.jpg')
]

class CompanyDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ViewPager.DataSource({
                pageHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    }

    componentDidMount(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithPages(IMGS)
        });
    }

    render(){
        return(
            <View style={{flex:1, flexDirection:'column', backgroundColor:'#ffffff'}}>

                <View style={{flexDirection: 'row', backgroundColor: '#B2EBF2',height : 45,alignItems: 'center'}}>
                    <TouchableHighlight onPress={Actions.pop} style={{width: 45}} underlayColor={'#E0F7FA'}>
                        <View style={{width:45, height:45, alignItems: 'center', justifyContent: 'center'}}>
                            <Icon name='chevron-left' size={30} color='#00BCD4'/>
                        </View>
                    </TouchableHighlight>
                    <Text style={{color:'#00BCD4', flex: 1, textAlign:'center',fontWeight:'bold'}}>업체 정보</Text>
                    <View style={{width:45}}></View>
                </View>

                <ScrollView style={{flex:1, flexDirection:'column', marginTop:5, marginLeft:5, marginRight:7}}>
                    <View style={{height:200}}>
                        <ViewPager
                            dataSource={this.state.dataSource}
                            renderPage={this._renderPage}
                            isLoop={true}
                            autoPlay={true}/>
                    </View>

                    <View style={{height:100, flexDirection:'row', marginTop:5, backgroundColor:'#FAFAFA'}}>
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
                            <Text style={{fontSize:15, fontWeight:'bold'}}>BABY PET SHOP</Text>
                            <Text style={{fontSize:11, color:'#BDBDBD', marginTop:5}}>경기도 수원시 영통구 매탄로140번길 54-30</Text>
                            <Text style={{fontSize:11, color:'#BDBDBD', marginTop:5}}>050-000-0000</Text>
                        </View>
                    </View>

                    <View style={{height:300, flexDirection:'column', backgroundColor:'#FAFAFA', marginTop:5}}>
                        <Text style={{height:50, fontSize:13, marginLeft:10,marginTop:5}}>업체소개</Text>
                        <Text style={{height:50, fontSize:11, color:'#BDBDBD', marginLeft:10, marginTop:2}}>BABY PET SHOP은 강아지 입양에서 부터 사후 관리까지 철저히 보장받을수있도록 100% 책임미용 서비스를 시행하고 있습니다.
                              항상 고객님의 만족을 최우선으로 언제나 노력하는 BABY PET SHOP가 되도록 노력하겠습니다.
                        </Text>
                        <Image
                            source={require('../../../../assets/img/map.jpg')}
                            style={{height:20, width:50, borderRadius: 50}} />
                    </View>
                </ScrollView>
            </View>
        )
    };

    _renderPage(data: Object, pageID: number | string){
        return (
            <Image
                source={data}
                style={{width: deviceWidth, height:300, borderRadius: 5}}
                resizeMode={Image.resizeMode.stretch}/>
        )
    }
}

module.exports = CompanyDetail;