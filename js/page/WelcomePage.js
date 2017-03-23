/**
 * Created by Administrator on 2017/3/16 0016.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    NativeModules,
    
} from 'react-native';
import NavigatorBar from '../common/NavigatorBar';
import HomePage from './HomePage';


export default class WelcomePage extends Component{
    componentDidMount() {
        setTimeout(()=>{
            this.props.navigator.push({
                component:HomePage,
            })
        },100)
    }
    // 构造

      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            par:'没有数据'
        };
      }

    render(){

        return  <View>
                <NavigatorBar title='星觅' justifyContent='center' />
                <Text
                    onPress={()=>this.callNativePage()
                }
                >welcome</Text>
                <Text>{this.state.par}</Text>
            </View>
        }



    callNativePage(){
        // const {navigator}=this.props;
        NativeModules.MyMapIntentModule.startActivityForResult("com.git_hub.TestJumpActivity",100,
            (successMsg) => {
                //this.setState({TEXT:successMsg,});
                // console.log(successMsg);
                if(successMsg==='1000'){
                    this.setState({
                        par:successMsg
                    })


                }
                // navigator.push({
                //     name:"Boy",
                //     component:'Boy'
                // })

            },
            (erroMsg) => {alert(erroMsg)}
        );

    }
}