import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Alert,Navigator} from 'react-native';
import Main from '../page/Main'
import TabBar from '../component/TabBar'
type Props = {};
export default class Login extends Component<Props> {
    username = '';
    password = '';
    //账号框文本变化的回调函数，该回调函数接收的参数为：输入框当前文本内容
    //通过绑定此函数给onChangeText就实现实时更新username变量
    onUsernameChanged = (newUsername) => {
        console.log(newUsername);//运行后可以在输入框随意输入内容并且查看log验证！
        this.username = newUsername;
    };

    //密码框文本变化的回调函数，该回调函数接收的参数为：输入框当前文本内容
    //通过绑定此函数给onChangeText就实现实时更新password变量
    onPasswordChanged = (newPassword) => {
        console.log(newPassword);//运行后可以在输入框随意输入内容并且查看log验证！
        this.password = newPassword;
    };

    login = () => {
        if (this.username == 'Admin' && this.password == '123') {

            Alert.alert(
                '登陆',
                'My Alert Msg',
                [
                    {text: '登陆成功', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }else {
            Alert.alert(
                'Alert Title',
                'My Alert Msg',
                [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }
    };

    render() {
        return (
            <View
                style={styles.container}>
                <View
                    style={styles.inputBox}>
                    <Image
                        style={styles.img}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />
                    <TextInput
                        onChangeText={this.onUsernameChanged}//绑定文本变化的回调函数
                        style={styles.input}
                        placeholderTextColor={'#ffd7cf'}//提示文本的颜色
                        placeholder={'请输入手机号码'}//提示文本内容
                        underlineColorAndroid={'transparent'}//设置下划线为透明
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <Image
                        style={styles.img}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />
                    <TextInput
                        onChangeText={this.onPasswordChanged}//绑定文本变化的回调函数
                        style={styles.input}
                        placeholderTextColor={'#ffd7cf'}//提示文本的颜色
                        placeholder={'请输入密码'}//提示文本内容
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity
                    onPress = {this.login}//绑定点击事件
                    style={styles.button}>
                    <Text
                        style={styles.btText}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                    <Text
                        style={styles.btText}>注册</Text>
                </TouchableOpacity>
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
    img: {
        width: 30,
        height: 30,
    },
    input: {
        width: 200,
        height: 40,
        color: '#fff',//输入框输入的文本为白色
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    btText: {
        color: '#fff',
    }
});
