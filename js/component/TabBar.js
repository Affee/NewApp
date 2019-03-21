import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from '../page/Home';
import River from '../page/River';
import List from '../page/List';
import Mine from '../page/Mine';

const dataSoure = [
                {icon:require('../image/添加.png'),selectedIcon:require('../image/添加.png'),tabPage:'Home',tabName:'首页',component:Home},
                {icon:require('../image/添加.png'),selectedIcon:require('../image/添加.png'),tabPage:'River',tabName:'巡河',component:River},
                {icon:require('../image/添加.png'),selectedIcon:require('../image/添加.png'),tabPage:'List',tabName:'列表',component:List},
                {icon:require('../image/添加.png'),selectedIcon:require('../image/添加.png'),tabPage:'Mine',tabName:'我的',component:Mine}
            ]
var navigation = null;
type Props = {};
export default class Home extends Component<Props> {
    constructor(props){
        super(props);
        navigation = this.props.navigation;
        this.state = {
            selectedTab:'Home'
        }
    }


    render() {
        let tabViews = dataSource.map((item,i) => {
            return (
                <TabNavigator.Item
                    title={item.tabName}
                    selected={this.state.selectedTab===item.tabPage}
                    titleStyle={{color:'black'}}
                    selectedTitleStyle={{color:'#7A16BD'}}
                    renderIcon={()=><Image style={styles.tabIcon} source={item.icon}/>}
                    renderSelectedIcon = {() => <Image style={styles.tabIcon} source={item.selectedIcon}/>}
                    tabStyle={{alignSelf:'center'}}
                    onPress = {() => {this.setState({selectedTab:item.tabPage})}}
                    key={i}
                >
                    <item.component  navigation={navigation}/>
                </TabNavigator.Item>
            );
        })
        return (
            <View style={styles.container}>
                <TabNavigator
                    hidesTabTouch={true}
                >
                    {tabViews}
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
