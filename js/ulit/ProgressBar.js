/**
 * Created by Administrator on 2017/3/24 0024.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
}  from 'react-native'

export default class ProgressBar extends  Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render(){
        let franctionPosition=(this.props.progress.position+this.props.progress.offset);
        let progressBarSize=(franctionPosition/(PAGES-1))*this.props.size;
        return(
            <View  style={[styles.container,{width:this.props.size}]}>
                 <View style={[style.progressBar,{progressBarSize}]}></View>
            </View>
        )
    }


}