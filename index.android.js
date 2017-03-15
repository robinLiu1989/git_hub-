/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  Navigator
} from 'react-native';
import Boy from './Boy';
import TabNavigator from 'react-native-tab-navigator';

export default class git_hub extends Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        selectedTab:'tb_popular'
      };
    }
  render() {
    return (
        <View style={styles.container}>
            <Navigator
                initialRoute={
                    {
                        component:Boy
                    }
                }
                renderScene={(route,navigator)=>{
                    let Component=route.component;
                    return <Component  navigator={navigator} {...route.params} />
                }}
            ></Navigator>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1:{
    flex:1,
    backgroundColor:'green'
  },
  page2:{
    flex:1,
    backgroundColor:'yellow'
  },
  img:{
    height:22,
    width:22
  }
});

AppRegistry.registerComponent('git_hub', () => git_hub);
