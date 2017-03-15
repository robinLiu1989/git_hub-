/**
 * Created by Administrator on 2017/3/15 0015.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import Girl from './Girl';
import NavigatorBar from './NavigatorBar';

export default class Boy extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            gift:'',
        };
      }
    render(){
        return (
            <View style={styles.container} >
                <NavigatorBar title='boy' statusBar={{
                    backgroundColor:'gray',
                    barStyle:'dark-content',
                }}
                   backgroundColor='#00a1e9'
                   justifyContent='center'
                />
                <Text style={styles.text}>I am a boy</Text>
                <Text style={styles.text}
                      onPress={()=>{
                            this.props.navigator.push({
                                component:Girl,
                                params:{
                                    gift:'一支玫瑰',
                                    onCallBack:(gift)=>{
                                        this.setState({
                                            gift:gift
                                        })
                                    }
                                }
                            })
                      }}
                >送女孩一支玫瑰</Text>
                <Text style={styles.text}>{this.state.gift}</Text>
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
    }
})