/**
 * Created by Administrator on 2017/3/23 0023.
 */
/**
 * Created by Administrator on 2017/3/15 0015.
 */
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,

} from 'react-native';
import NavigatorBar from '../../common/NavigatorBar';
import Toast,{DURATION}  from 'react-native-easy-toast'

export default class MyPage extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }

    render() {
        return <View>
                
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F5FCFF',
    },
    page1:{
        flex:1,
        // backgroundColor:'green'
    },
    page2:{
        flex:1,
        // backgroundColor:'yellow'
    },
    img:{
        height:22,
        width:22
    },
    text:{
        height:100,
        fontSize:30
    }
});