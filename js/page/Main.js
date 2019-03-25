import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import TabBar from '../component/TabBar';

type Props = {};
export default class Main extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <TabBar/>
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
//lalalal