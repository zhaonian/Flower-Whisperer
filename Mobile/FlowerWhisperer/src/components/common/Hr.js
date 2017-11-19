import React from 'react';
import { StyleSheet, View } from 'react-native';

const Hr = (props) => {
        return (
                <View style={[styles.line, props.style]} />
        );
};

const styles = StyleSheet.create({
        line: {
                borderBottomWidth: 1,
                borderBottomColor: '#d4b9da',
                marginTop: 6,
                marginLeft: 5,
                marginRight: 5,
                shadowColor: '#A994AE',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
        }
});

export { Hr };
