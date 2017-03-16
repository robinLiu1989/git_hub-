/**
 * Created by Administrator on 2017/3/16 0016.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native';
import NavigatorBar from '../common/NavigatorBar';
import DataRepository from '../expand/dao/DataRepository';

const URL='http://app.95e.com/vm/getMaterials.aspx?';
const QUERY_STR='c=';

export default class PopularPage extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.dataRepository=new DataRepository();

        this.state={
            result:''
        }
      }
    onLoad(){
        let url=this.genUrl(this.text);
        this.dataRepository.fetchNetRepository(url)
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
    genUrl(key){
        return URL+QUERY_STR+key;
    }
    render(){
        return <View>
            <NavigatorBar title='popularpage' justifyContent='center' />

            <TextInput onChangeText={text=>this.text=text }/>
            <Text
                onPress={()=>this.onLoad()}
            >获取数据</Text>
            <Text>{this.state.result}</Text>
        </View>
    }
}

// const styles=StyleSheet.create({
//     text:{
//         fontSize:40,
//         height:40
//     }
// })