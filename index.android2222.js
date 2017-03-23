/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    NativeModules,
    View,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class git_hub extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            global:'这个是预定的接受信息',
            tojs:'',
        };
      }
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}
                    //给此处的文字绑定一个事件，其中callNative为要调用的方法名。  
                      onPress={this.callNative.bind(this)}
                >
                    点击此处文字调用原生方法!
                </Text>

                <Text style={styles.instructions}>
                    此Demo演示如何调用Android原生中的复杂方法。
                </Text>

                <Text style={styles.welcome}
                    //给此处的文字绑定一个事件，其中callNative为要调用的方法名。
                      onPress={this.callNativeData.bind(this)}
                >
                    点击此处，看原生数据能不能传到RN
                </Text>
                <Text style={styles.welcome} >
                    {this.state.global}
                </Text>

                <Text style={styles.welcome}
                    // 给此处的文字绑定一个事件，其中callNative为要调用的方法名。
                 onPress={this.callNativePage.bind(this)}
                >
                   点我调用原生页面
                </Text>
               
                <Text style={styles.welcome}
                      onPress={this.getJsData.bind(this)}
                >
                    安卓向RN跳转:{this.state.tojs}
                </Text>
            </View>
        );
    }
    //rn 调用原生，无参
    callNative(){
        NativeModules.MyNativeModule.showTime();
    }

    //rn 调用原生，有参
    callNativeData(){
        NativeModules.MyNativeModule.dataToJS((res)=>{
            this.setState({global:res})
        },
            (err)=>{
                this.setState({global:err})
            }
        );
    }

    // rn调用原生页面
    callNativePage(){
        NativeModules.MyMapIntentModule.startActivityByClassname('com.git_hub.Hello','title')
    }

    //原生调rn
    getJsData() {
        NativeModules.MyMapIntentModule.dataToJS((msg) => {
                // console.log(msg);
                // // let base = require('./constant');
                // let  base={};
                // base.columnID = msg;
                // ToastAndroid.show('JS界面:从Activity中传输过来的数据为:' + base.columnID, ToastAndroid.SHORT);
            },
            (result) => {
                // ToastAndroid.show('JS界面:错误信息为:' + result, ToastAndroid.SHORT);
            })
    }
    componentDidMount() {
        // let base = require('./constant');
        //ToastAndroid.show(base.columnID, ToastAndroid.SHORT);
        NativeModules.MyMapIntentModule.dataToJS((msg) => {
                // console.log(msg);
                // let base = require('./constant');
                this.setState({tojs:msg})
                // let  base={};
                // base.columnID = msg;
                // ToastAndroid.show('JS界面:从Activity中传输过来的数据为:' + base.columnID, ToastAndroid.SHORT);
            },
            (result) => {
                // ToastAndroid.show('JS界面:错误信息为:' + result, ToastAndroid.SHORT);
            })

        // let base={};
        // let id = base.columnID;
        // if (id == "3") {
        //     const { navigator } = this.props;
        //     if (navigator) {
        //         navigator.push({
        //             name: 'secondPage',
        //             component: secondPage,
        //         })
        //     }
        // }  if (id == "4") {
        //     const { navigator } = this.props;
        //     if (navigator) {
        //         navigator.push({
        //             name: 'otherPage',
        //             component: otherPage,
        //         })
        //     }
        // }
    }




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('git_hub', () => git_hub);  