/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Navigator,
    AppRegistry,
    Text,
    View
} from 'react-native';
import WelcomePage from './js/page/WelcomePage';
import FecthText  from './js/common/FecthText'
import AsyncStorageTest  from './AsyncStorageTest'
import CustomKeyPage from './js/page/my/CustomKeyPage'

export default class SetUp extends Component{
      // 构造
        constructor(props) {
          super(props);
          // 初始状态
          this.state = {
            ios_parma:''
          };
        }
  
  renderScene(route, navigator){
    let Component=route.component;
    return <Component {...route.params} navigator={navigator} />
  }

  render(){

    {
      if(this.state.ios_parma.length===0 ){
        return  <Navigator
            initialRoute={{component:WelcomePage}}
            renderScene={(route,navigator)=>this.renderScene(route,navigator)}
        />
      }else{
        return  <Text>第一页index</Text>
      }
    }
   
  }
}

AppRegistry.registerComponent('git_hub', () => SetUp);

