/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Navigator,
    AppRegistry
} from 'react-native';
import WelcomePage from './js/page/WelcomePage';

export default class SetUp extends Component{
  renderScene(route, navigator){
    let Component=route.component;
    return <Component {...route.params} navigator={navigator} />
  }
  render(){
    return <Navigator
        initialRoute={{component:WelcomePage}}
        renderScene={(route,navigator)=>this.renderScene(route,navigator)}
    />
  }
}

AppRegistry.registerComponent('git_hub', () => SetUp);

