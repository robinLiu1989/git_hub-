/**
 * Created by Administrator on 2017/3/15 0015.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ListView,
    TouchableOpacity,
    RefreshControl
} from 'react-native';
import Girl from './Girl';
import NavigatorBar from './NavigatorBar';
import Toast, {DURATION} from 'react-native-easy-toast'
const data={
    result:[
        {
            email:'haahhaha@1222.com',
            fullname:'zhangsan'
        },
        {
            email:'haahhaha@1222.com',
            fullname:'zhangsan'
        },
        {
            email:'haahhaha@1222.com',
            fullname:'zhangsan'
        },
        {
            email:'haahhaha@1222.com',
            fullname:'zhangsan'
        },
        {
            email:'haahhaha@1222.com',
            fullname:'zhangsan'
        }
    ]
}

export default class ListViewText extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !==r2})
        this.state = {
            dataSource:ds.cloneWithRows(data.result),
            isLoading:true
        };
        this.onLoad();
      }

    renderRow(item){
        return <View style={styles.row}>
            <TouchableOpacity
                onPress={()=>{
                    this.toast.show('你单击了'+item.fullname,DURATION.LENGTH_LONG);
                } }>
                <Text style={styles.tips}>{item.email}</Text>
                <Text style={styles.tips}>{item.fullname}</Text>
            </TouchableOpacity>
        </View>
    }

    renderFooter(){
        return <Image style={{width:100, height:100} } source={require('./res/images/ic_polular.png')} />
    }
    renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return <View  key={rowID} style={styles.line}>

        </View>
    }
    onLoad(){
        setTimeout(()=>{
           this.setState({
                isLoading:false
           })
        },2000)
    }
    render(){
        return (
            <View style={styles.container} >
                <NavigatorBar title='listview' justifyContent='center' backgroundColor='#02A682'/>
                <ListView dataSource={this.state.dataSource}
                          renderRow={(item)=>this.renderRow(item)}
                          renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                          renderFooter={()=>this.renderFooter()}
                          refreshControl={  <RefreshControl
                            refreshing={this.state.isLoading}
                            onRefresh={()=>this.onLoad()}
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                          /> }
                />
                <Toast ref={toast=>{this.toast=toast}} />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray'
    },
    text:{
       fontSize:20
    },
    tips:{
        fontSize:20,
        color:'#37A'
    },
    row:{
        height:50,
        margin:5
    },
    line:{
       height:1,
       backgroundColor:'black'
    }

})