/**
 * Created by Administrator on 2017/3/23 0023.
 */
/**
 * Created by Administrator on 2017/3/15 0015.
 */
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
    StatusBar
} from 'react-native';
import NavigatorBar from '../../common/NavigatorBar';
import Toast,{DURATION}  from 'react-native-easy-toast'
import ViewUlit  from '../../ulit/ViewUlit'



export default class CustomKeyPage extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }

    render() {
        let rightButton=<TouchableOpacity>
            <View>
                <Text style={styles.title} >保存</Text>
            </View>
            </TouchableOpacity>
        let titleView= <View >
            <Text style={{fontSize:20,color:'white'}}>
                自定义标签
            </Text>
        </View>
        return <View style={styles.container}>
            <NavigatorBar justifyContent='space-between'
                          title='自定义标签'
                leftButton={ViewUlit.getLeftButton(()=>this.onSave())}
                rightButton={rightButton}

                titleView={titleView}
                statusBar={{backgroundColor:'blue'}}
                backgroundColor='blue'
            />
            <ScrollView style={styles.container} >
                <Text style={styles.tips}>自定义标签</Text>
            </ScrollView>
        </View>
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
    },
    title:{
        padding:20,
        color:'yellow'
    },
    tips:{
        fontSize:20
    }
});