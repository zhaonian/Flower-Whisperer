import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const SimpleHeader = ({ middleTitle, rightTitle, onPostPress }) => {
        const { textStyle, viewStyle, leftContainer, middleContainer, rightContainer } = styles;

        return (
                <View style={viewStyle}>
                        <View style={leftContainer}>
                                <TouchableWithoutFeedback onPress={() => { Actions.pop(); }}>
                                        <MaterialIcon
                                                name='keyboard-arrow-left'
                                                size={28}
                                        />
                                </TouchableWithoutFeedback>
                        </View>
                        <View style={middleContainer}>
                                <Text style={textStyle}>{middleTitle}</Text>
                        </View>
                        <View style={rightContainer}>
                                <TouchableWithoutFeedback onPress={onPostPress} >
                                        <View><Text style={textStyle}>{rightTitle}</Text></View>
                                </TouchableWithoutFeedback>
                        </View>
                </View>
        );
};

const styles = StyleSheet.create({
        viewStyle: {
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                paddingTop: 15,
                elevation: 2,
                position: 'relative',
                flexDirection: 'row',
                borderBottomColor: '#009999',                
                borderBottomWidth: 0.5
        },
        textStyle: {
                fontSize: 20,
                marginLeft: 8
        },
        leftContainer: {
                flex: 1,
                flexDirection: 'row',
                marginLeft: 10
        },
        middleContainer: {
                justifyContent: 'center'
        },
        rightContainer: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 10
        }
});

export { SimpleHeader };
