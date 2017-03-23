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
    AsyncStorage
} from 'react-native';
import NavigatorBar from './js/common/NavigatorBar';


export default class AsyncStorage extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
      }
    render(){
        <View  style={styles.container}>
            <NavigatorBar title='AsyncStorage的运用' />
            <TextInput  />
            <View>
                <Text>保存</Text>
                <Text>移除</Text>
                <Text>取出</Text>
            </View>

        </View>
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray'
    },
    text:{
       fontSize:20
    }
})