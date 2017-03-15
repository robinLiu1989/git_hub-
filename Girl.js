/**
 * Created by Administrator on 2017/3/15 0015.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import NavigatorBar from './NavigatorBar';

export default class Girl extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            gift:''
        };
    }
    renderButton(img) {
        return <TouchableOpacity
                 onPress={()=>{
                    this.props.navigator.pop();
                 }}
                >
                <Image source={img} style={{margin:5,width:22,height:22}}></Image>
            </TouchableOpacity>
    }
    render(){
        return (
            <View style={styles.container} >
                <NavigatorBar title='girl'
                    leftButton={
                        this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))
                     }
                    rightButton={
                        this.renderButton(require('./res/images/ic_star.png'))
                    }
                     backgroundColor='#02A682'
                     justifyContent='space-between'
                />
                <Text style={styles.text}>I am a girl</Text>
                <Text style={styles.text}>我收到了男孩的{this.props.gift}</Text>
                <Text style={styles.text}
                      onPress={()=>{
                            this.props.onCallBack('一盒巧克力');
                            this.props.navigator.pop();
                        }
                      }
                >回赠巧克力</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray',
    },
    text:{
        fontSize:20
    }
})