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
import HttpUtils  from './HttpUtils';

export default class FecthText extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            result:''
        };
      }
     onLoad(url){
            fetch(url)
                .then(response=>response.json())
                .then(result=>{
                    this.setState({
                        result:JSON.stringify(result)
                    })
                })
                .catch(err=>{
                    this.setState({
                        result:JSON.stringify(err)
                    })
                })
   }
    onSubmit(url,data){
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'v='+data.v+'&i='+data.i
        })
            .then(result=>{
                this.setState({
                    result:JSON.stringify(result)
                })
            })
    }

    render(){
        return (
            <View style={styles.container} >
                <NavigatorBar title='fecth的使用'/>
                <Text  style={styles.text}
                    onPress={()=>{
                        this.onLoad('http://app.95e.com/vm/getTagMaterials.aspx?v=1&i=21')
                    }}
                >获取数据</Text>
                <Text  style={styles.text}
                       onPress={()=>{
                        this.onSubmit('http://app.95e.com/vm/getTagMaterials.aspx',{v:'1',i:'21'})
                    }}
                >提交数据 </Text>
                <Text >返回的结果为：{this.state.result}</Text>
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
        fontSize:40
    }
})