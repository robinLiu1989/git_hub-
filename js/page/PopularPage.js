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
    NativeModules,
    RefreshControl,
    StatusBar
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

      }
    

    callNativePage(){

        NativeModules.MyMapIntentModule.startActivityForResult("com.git_hub.TestJumpActivity",100,
            (successMsg) => {

                if(successMsg==='1000'){
                    this.setState({
                        par:successMsg

                    })
                }
            },
            (erroMsg) => {alert(erroMsg)}
        );
    
    }


    render(){

            return <View style={styles.container}>
                <NavigatorBar title='popularpage' justifyContent='center'
                              StatusBar={{backgroundColor:'blue'}}
                />
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar/> }
                    tabBarBackgroundColor='#2196F3'
                    tabBarActiveTextColor='white'
                >

                    <PopularTab tabLabel="React" onPress={()=>this.loadData()}
                    >React</PopularTab>
                    <PopularTab tabLabel="js" onPress={()=>this.loadData()}
                    >js</PopularTab>
                    <PopularTab tabLabel="ios" onPress={()=>this.loadData()}
                    >ios</PopularTab>

                </ScrollableTabView>

            </View>
        }

    loadData(){
        let url='https://api.github.com/search/repositories?q=js&sort=stars';
        HttpUtils.get(url)
            .then(result=>{
                this.setState({
                    result:JSON.stringify(result),
                    dataSource:this.state.dataSource.cloneWithRows(JSON.stringify(result)),
                })

            })
            .catch(err=>{
                this.setState({
                    result:JSON.stringify(err)
                })
            })
    }

}

class PopularTab extends Component {
    constructor(props) {
        super(props);
        this.dataResipository=new DataRepository();

        this.state = {
          result:'',
          key:'react',
          dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2 }),
          isLoading:false

        };
    }

    componentDidMount() {
        this.loadData()
    }

    loadData(){
        let url=URL+this.props.tabLabel+QUERY_STR;
        HttpUtils.get(url)
            .then(result=>{
                this.setState({
                    result:JSON.stringify(result),
                    dataSource:this.state.dataSource.cloneWithRows(result.items),
                })

            })
            .catch(err=>{
                this.setState({
                    result:JSON.stringify(err)
                })
            })
    }



    renderRow(data){
        return <View  style={styles.row}>

            <Text>{data.full_name}</Text>
            <Text>{data.description}</Text>
            <Text>{data.owner.avatar_url}</Text>

        </View>
    }


    render(){
        return <View  style={styles.container}>
             <ListView
                dataSource={this.state.dataSource}
                renderRow={(data)=>this.renderRow(data)}
                enableEmptySections={true}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={()=>this.loadData()}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffff00"
                    />
                }
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
    },
    row:{
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderColor: '#dddddd',
        borderStyle: null,
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor: 'gray',
        shadowOffset: {width:0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation:2

    }

})