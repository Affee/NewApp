import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';



type Props = {};
export default class Login extends Component<Props> {
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
                        style={styles.input}
                        placeholderTextColor={'#ffd7cf'}//提示文本的颜色
                        placeholder={'请输入密码'}//提示文本内容
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity
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
