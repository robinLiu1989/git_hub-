/**
 * Created by Administrator on 2017/3/16 0016.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ListView
} from 'react-native';
import NavigatorBar from '../common/NavigatorBar';
import DataRepository from '../expand/dao/DataRepository';
import FecthText  from '../common/FecthText';
import ScrollTabView from 'react-native-scrollable-tab-view'

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
            <ScrollTabView></ScrollTabView>


        </View>
    }
}

class PopularTab extends Component {
    constructor(props) {
        super(props);
        this.dataResipository=new DataRepository();
        this.state = {
          result:'',
        };
    }
    loadData(){
        let url=URL+this.key+QUERY_STR;
        this.dataResipository
            .fetchNetRepository(url)
            .then(result=>{
                this.setState({
                    result:JSON.stringify(result),
                }).catch(err=>{
                    console.log(err);
                })
            })
    }
    render(){
        <View>

        </View>
    }


}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    tips:{
        fontSize:20
    }
})