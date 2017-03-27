/**
 * Created by Administrator on 2017/3/15 0015.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    StatusBar,
    Platform,
    TouchableOpacity
} from 'react-native';

const Nav_Bar_Height_Android=50;
const Nav_Bar_Height_Ios=44;
const Status_Bar_Height=20;

const  StatusBarShape={
    backgroundColor:React.PropTypes.string,
    // barStyle:React.PropTypes.oneOf('default','light-content','dark-content'),
    hidden:React.PropTypes.bool
}

export default class NavigatorBar extends Component{
    static propTypes={
        style:View.propTypes.style,
        title:React.PropTypes.string,
        titleView:React.PropTypes.element,
        hide:React.PropTypes.bool,
        leftButton:React.PropTypes.element,
        rightButton:React.PropTypes.element,
        statusBar:React.PropTypes.shape(StatusBarShape),
        backgroundColor:React.PropTypes.string
    }
    static defaultProps={
        statusBar:{
            barStyle:'light-content',
            hidden:false
        },
        backgroundColor:'red',
       
    }
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            title:'',
            hide:false
        };
      }
        render(){

            let status=<View style={styles.statusBar}>
                 <StatusBar {...this.props.statusBar} />
                </View>
            let titleView=this.props.titleView? this.props.titleView: <Text style={[styles.title]}>{this.props.title}</Text>

            let content=<View style={[styles.NavBar,{backgroundColor:this.props.backgroundColor},{justifyContent:this.props.justifyContent}]}>
                {this.props.leftButton}
                <View style={styles.titleViewContainer}>
                    {titleView}
                </View>
                {this.props.rightButton}

            </View>
            return (
                <View style={styles.container}>
                    {status}
                    {content}
                </View>
            )
        }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'gray',
    },
    NavBar:{
        alignItems:'center',
        height:Platform.OS==='ios'? Nav_Bar_Height_Ios:Nav_Bar_Height_Android,
        flexDirection:'row',
    },
    titleViewContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        color:'white'
    },
    statusBar:{
        height:Platform.OS==='ios'? Status_Bar_Height:0
    }
})