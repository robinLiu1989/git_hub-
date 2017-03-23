/**
 * Created by Administrator on 2017/3/16 0016.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    NativeModules
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import PopularPage from './PopularPage';
import Boy from '../../Boy';
import WelcomePage   from  './WelcomePage'

export default class HomePage extends Component{

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:'tb_popular'
        };
    }


    callNativePage(){
      let navigate=this.props.navigator;
        NativeModules.MyMapIntentModule.startActivityForResult("com.git_hub.TestJumpActivity",100,
            (successMsg) => {
                //this.setState({TEXT:successMsg,});
                // console.log(successMsg);
                if(successMsg==='1000'){
                    this.setState({
                        par:successMsg

                    })
                }
                navigate.push({
                    component:Boy
                })

            },
            (erroMsg) => {alert(erroMsg)}
        );

    }
    callRNPage(){

        this.props.navigator.push({
            component:PopularPage
        })
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_popular'}
                    selectedTitleStyle={{color:'red'}}
                    title="最热"
                    renderIcon={() => <Image source={require('../../res/images/ic_polular.png')}  style={styles.img} />}
                    renderSelectedIcon={() => <Image source={require('../../res/images/ic_polular.png')} style={[styles.img,{tintColor:'red'}]}  />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
                    <View style={styles.page2}>
                        <PopularPage/>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_trending'}
                    selectedTitleStyle={{color:'red'}}
                    title="趋势"
                    renderIcon={() => <Image source={require('../../res/images/ic_trending.png')} style={styles.img} />}
                    renderSelectedIcon={() => <Image source={require('../../res/images/ic_trending.png')} style={[styles.img,{tintColor:'red'}]} />}
                    onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
                    <View style={styles.page2}>
                        <PopularPage/>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_favorite'}
                    selectedTitleStyle={{color:'red'}}
                    title="收藏"
                    renderIcon={() => <Image source={require('../../res/images/ic_polular.png')}  style={styles.img} />}
                    renderSelectedIcon={() => <Image source={require('../../res/images/ic_polular.png')} style={[styles.img,{tintColor:'red'}]}  />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
                    <View style={styles.page1}>
                        <PopularPage/>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_my'}
                    selectedTitleStyle={{color:'red'}}
                    title="我的"
                    renderIcon={() => <Image source={require('../../res/images/ic_trending.png')} style={styles.img} />}
                    renderSelectedIcon={() => <Image source={require('../../res/images/ic_trending.png')} style={[styles.img,{tintColor:'red'}]} />}
                    onPress={() => this.setState({ selectedTab: 'tb_my' })}>
                    <View style={styles.page2}>
                        <PopularPage/>
                    </View>
                </TabNavigator.Item>
            </TabNavigator>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F5FCFF',
    },
    page1:{
        flex:1,
        // backgroundColor:'green'
    },
    page2:{
        flex:1,
        // backgroundColor:'yellow'
    },
    img:{
        height:22,
        width:22
    },
    text:{
        height:100,
        fontSize:30
    }
});