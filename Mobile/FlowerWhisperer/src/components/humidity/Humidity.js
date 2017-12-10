import React, { Component } from 'react';
import { StyleSheet, View, Text, WebView } from 'react-native';

class Humidity extends Component {
        render() {
                return (
                        <View style={styles.container}>
                                <Text>
                                        Humidity
                                </Text>
                                <WebView
                                        source={{ uri: 'http://flowerwhisperer.azurewebsites.net/' }}
                                        style={{ marginTop: 20 }}
                                />
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
