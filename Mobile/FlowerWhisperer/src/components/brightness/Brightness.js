import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Brightness extends Component {
        render() {
                return (
                        <View style={styles.container}>
                                <Text>
                                        Brightness
                                </Text>
                        </View>
                );
        }
}


const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
        },
});

export default Brightness;
