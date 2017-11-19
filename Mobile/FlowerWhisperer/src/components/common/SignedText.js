import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SignedText = (props) => {
        return (
                <View style={styles.signedTextContainer}>
                        <View style={styles.signContainer}>
                                <Text style={styles.signStyle}>{props.sign}</Text>
                        </View>
                        <Text style={styles.textStyle}>{props.text}</Text>
                </View>
        );
};

const styles = StyleSheet.create({
        signedTextContainer: {
                flexDirection: 'row'
        },
        signStyle: {
                fontWeight: 'bold',
                marginRight: 5
        },
        signContainer: {
                width: 50,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 10
        }
});

export { SignedText };
