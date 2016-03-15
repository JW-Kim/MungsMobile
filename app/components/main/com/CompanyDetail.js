var React = require('react-native');
var {View, Text, ScrollView, Dimensions, Image} = React;
var ViewPager = require('react-native-viewpager');

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
            <View style={{flex:1, flexDirection:'column'}}>
                <View style={{height:45, backgroundColor: '#0277BD', flexDirection:'row', alignItems: 'center'}}>
                    <View style={{width:50}}></View>
                    <Text style={{flex: 1, color:'#fff', textAlign:'center', fontWeight:'bold'}}>업체 정보</Text>
                    <Text style={{width:50, color:'#fff'}} onPress={this.props.closeCompanyDetailModal}>닫기</Text>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View style={{height:200}}>
                        <ViewPager
                            dataSource={this.state.dataSource}
                            renderPage={this._renderPage}
                            isLoop={true}
                            autoPlay={true}/>
                    </View>

                    <View style={{height:100, flexDirection:'row', marginTop:5, borderWidth:2, borderColor:'#EEEEEE'}}>
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
                            <Text style={{fontSize:10, color:'#BDBDBD', marginTop:5}}>경기도 수원시 영통구 매탄로140번길 54-30</Text>
                            <Text style={{fontSize:10, color:'#BDBDBD', marginTop:5}}>050-000-0000</Text>
                        </View>
                    </View>

                    <View style={{height:100, flexDirection:'column'}}>
                        <Text>업체소개</Text>
                        <Text>BABY PET SHOP은 강아지 입양에서 부터 사후 관리까지 철저히 보장받을수있도록 100% 책임미용 서비스를 시행하고 있습니다.
                              항상 고객님의 만족을 최우선으로 언제나 노력하는 BABY PET SHOP가 되도록 노력하겠습니다.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    };

    _renderPage(data: Object, pageID: number | string){
        return (
            <Image
                source={data}
                style={{width: deviceWidth, height:200}} />
        )
    }
}

module.exports = CompanyDetail;