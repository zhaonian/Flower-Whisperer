import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Humidity extends Component {
        render() {
                return (
                        <View style={styles.container}>
                                <Text>
                                        Humidity
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

export default Humidity;
