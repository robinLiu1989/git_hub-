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
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import NavigatorBar  from './NavigatorBar';


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
        <TabNavigator>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_popular'}
              selectedTitleStyle={{color:'red'}}
              title="最热"
              renderIcon={() => <Image source={require('./res/images/ic_polular.png')}  style={styles.img} />}
              renderSelectedIcon={() => <Image source={require('./res/images/ic_polular.png')} style={[styles.img,{tintColor:'red'}]}  />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <View style={styles.page1}>
                <NavigatorBar title='boy' statusBar={{
                    backgroundColor:'gray',
                    barStyle:'dark-content',
                }}
                              backgroundColor='#00a1e9'
                              justifyContent='center'
                />
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_trending'}
              selectedTitleStyle={{color:'red'}}
              title="趋势"
              renderIcon={() => <Image source={require('./res/images/ic_trending.png')} style={styles.img} />}
              renderSelectedIcon={() => <Image source={require('./res/images/ic_trending.png')} style={[styles.img,{tintColor:'red'}]} />}
              onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <View style={styles.page2}>

            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_favorite'}
              selectedTitleStyle={{color:'red'}}
              title="收藏"
              renderIcon={() => <Image source={require('./res/images/ic_polular.png')}  style={styles.img} />}
              renderSelectedIcon={() => <Image source={require('./res/images/ic_polular.png')} style={[styles.img,{tintColor:'red'}]}  />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
            <View style={styles.page1}>

            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_my'}
              selectedTitleStyle={{color:'red'}}
              title="我的"
              renderIcon={() => <Image source={require('./res/images/ic_trending.png')} style={styles.img} />}
              renderSelectedIcon={() => <Image source={require('./res/images/ic_trending.png')} style={[styles.img,{tintColor:'red'}]} />}
              onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            <View style={styles.page2}>

            </View>
          </TabNavigator.Item>
        </TabNavigator>
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
