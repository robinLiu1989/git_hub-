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
    AsyncStorage,

} from 'react-native';
import NavigatorBar from './js/common/NavigatorBar';
import Toast,{DURATION}  from 'react-native-easy-toast'

export default class AsyncStorageTest extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
      }
    onSave(){
        AsyncStorage.setItem('KEY',this.text,(err)=>{
            if(!err){
                this.toast.show('保存成功',DURATION.LENGTH_LONG);
            }else{
                this.toast.show('保存失败',DURATION.LENGTH_LONG);
            }
        })
    }
    onFecth(){
        AsyncStorage.getItem('KEY',(err,result)=>{
            if(!err){
                if(result!==''&&result!==null){
                    this.toast.show('取出内容为'+result);
                }else{
                    this.toast.show('取出内容不存在');
                }

            }else{
                this.toast.show('取出失败');
            }
        })
    }
    onRmove(){
        AsyncStorage.removeItem('KEY',(err)=>{
            if(!err){
                this.toast.show('移除成功',DURATION.LENGTH_LONG);
            }else{
                this.toast.show('移除失败',DURATION.LENGTH_LONG);
            }
        })
    }
    render(){
       return <View  style={styles.container}>
            <NavigatorBar title='AsyncStorage的运用' justifyContent='center'/>
            <TextInput style={{borderWidth:1,height:40}}
                       onChangeText={(text)=>this.text=text}
            />
            <View  style={{flexDirection:'row',justifyContent:'center',height:40,alignItems:"center" }}>

                <Text style={{flex:1,textAlign:'center',fontSize:30}}
                      onPress={()=>this.onSave()}
                >保存</Text>
                <Text style={{flex:1,textAlign:'center',fontSize:30}}
                      onPress={()=>this.onRmove()}
                >移除</Text>
                <Text style={{flex:1,textAlign:'center',fontSize:30}}
                      onPress={()=>this.onFecth()}
                >取出</Text>
            </View>
            <Toast ref={toast=>this.toast=toast}  />
        </View>
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'gray'
    },
    text:{
       fontSize:20
    }
})