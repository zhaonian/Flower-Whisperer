import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NumberedText = (props) => {
        return (
                <View style={styles.numberedTextContainer}>
                        <Text style={styles.numberStyle}>{props.number}</Text>
                        <Text style={styles.textStyle}>{props.text}</Text>
                </View>
        );
};

const styles = StyleSheet.create({
        numberedTextContainer: {
                flexDirection: 'column',
                width: 75,
                alignItems: 'center'
        },
        numberStyle: {
                fontWeight: 'bold',
                marginRight: 5
        }
});

export { NumberedText };
