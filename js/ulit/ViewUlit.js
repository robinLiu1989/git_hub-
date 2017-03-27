/**
 * Created by Administrator on 2017/3/23 0023.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
}  from 'react-native'

export default class ViewUlit {
    static getLeftButton(callBack){
        return <TouchableOpacity
            style={{padding:10}}
            onPress={callBack}
        >
            <Image
                style={{width:26,height:26,tintColor:'yellow'}}
                source={require('../../res/images/ic_arrow_back_white_36pt.png')}
            />
        </TouchableOpacity>
    }
}