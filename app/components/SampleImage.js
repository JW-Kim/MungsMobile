'use strict';

var React = require('react-native');
var {View, Image} = React;

class SampleImage extends React.Component{

    render(){
        return(
            <View>
                <Image
                    style={{
                        width: 60,
                        height: 60,
                        backgroundColor: 'transparent',
                        marginRight: 10,
                    }}
                    source={require('../../assets/img/800x502.ratio.jpg')}
                 />
            </View>
        )
    }
}

module.exports = SampleImage;