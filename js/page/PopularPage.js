/**
 * Created by Administrator on 2017/3/16 0016.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ListView,
    NativeModules
} from 'react-native';
import NavigatorBar from '../common/NavigatorBar';
import DataRepository from '../expand/dao/DataRepository';
import ScrollableTabView, {ScrollableTabBar}from  'react-native-scrollable-tab-view';
import HttpUtils  from '../expand/dao/HttpUtils';
import Boy from '../../Boy';

const URL='https://api.github.com/search/repositories?q=';
const QUERY_STR='&sort=stars';




export default class PopularPage extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          this.state={
                par:'',
                willmount:''
          }
          // const {navigator} = this.props;
      }
    

    callNativePage(){

        NativeModules.MyMapIntentModule.startActivityForResult("com.git_hub.TestJumpActivity",100,
            (successMsg) => {
                //this.setState({TEXT:successMsg,});
                // console.log(successMsg);
                if(successMsg==='1000'){
                    this.setState({
                        par:successMsg

                    })
                }
                // navigator.push({
                //     name:'Boy',
                //     component:'Boy'
                // })

            },
            (erroMsg) => {alert(erroMsg)}
        );
    
    }
    componentWillUpdate(){




    }

    render(){

            return <View style={styles.container}>
                <NavigatorBar title='popularpage' justifyContent='center' />
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar/> }
                >

                    <PopularTab tabLabel="React">React</PopularTab>
                    <PopularTab tabLabel="js">js</PopularTab>

                </ScrollableTabView>
                <Text style={{height:300,fontSize:30}}
                      onPress={()=>this.callNativePage()}
                >点我调用原生Helloword</Text>
                <Text style={{height:100,fontSize:30}}

                >原生Helloword返回的参数：{this.state.par}</Text>
                <Text style={{height:100,fontSize:30}}

                >componentWillMount中的参数：{this.state.willmount}</Text>
            </View>
        }



}

class PopularTab extends Component {
    constructor(props) {
        super(props);
        this.dataResipository=new DataRepository();
        const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2 })
        this.state = {
          result:'',
          key:'react',
          dataSource:ds.cloneWithRows([
              'ha','xi','hehe'
          ])
        };
    }

    componentDidMount() {
        // this.loadData()
    }
    // loadData(){
    //     let url=URL+this.state.key+QUERY_STR;
    //     this.dataResipository
    //         .fetchNetRepository(url)
    //         .then(result=>{
    //             this.setState({
    //                 result:JSON.stringify(result),
    //                 dataSource:this.state.dataSource.cloneWithRows(result)
    //             }).catch(err=>{
    //                 console.log(err);
    //             })
    //         })
    // }
    loadData(){
        let url='https://api.github.com/search/repositories?q=js&sort=stars';
        HttpUtils.get(url)
            .then(result=>{
                this.setState({
                    result:JSON.stringify(result),
                    dataSource:this.state.dataSource.cloneWithRows(JSON.stringify(result)),

                })
                // console.log(result)

            })
            .catch(err=>{
                this.setState({
                    result:JSON.stringify(err)
                })
            })
    }



    renderRow(data){
        return <View>

            <Text>{data}</Text>

        </View>
    }


    render(){
        return <View>
             <ListView
                dataSource={this.state.dataSource}
                renderRow={(data)=>this.renderRow(data)}
              />
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