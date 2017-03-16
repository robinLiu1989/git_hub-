/**
 * Created by Administrator on 2017/3/16 0016.
 */
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import NavigatorBar from '../common/NavigatorBar';
import HomePage from './HomePage';

export default class WelcomePage extends Component{
    componentDidMount() {
        setTimeout(()=>{
            this.props.navigator.resetTo({
                component:HomePage
            })
        },1000)
    }
    render(){
        return <View>
            <NavigatorBar title='星觅' justifyContent='center' />
            <Text>welcome</Text>
        </View>
    }
}