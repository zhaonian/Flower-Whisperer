import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Header = (props) => {
        const { pencileStyle, viewStyle, leftContainer, rightContainer } = styles;

        return (
                <View style={viewStyle}>
                        <View style={leftContainer}>
                                <TouchableWithoutFeedback onPress={() => { props.onHamburgerPress(); }}>
                                        <MaterialIcon
                                                name='menu'
                                                size={25}
                                                color='#000000'
                                        />
                                </TouchableWithoutFeedback>
                        </View>

                        <View>
                                <Text style={styles.titleText}>{props.title}</Text>
                        </View>

                        <View style={rightContainer}>
                                <TouchableWithoutFeedback onPress={() => { Actions.newPost(); }}>
                                        <SimpleLineIcon
                                                style={pencileStyle}
                                                name='pencil'
                                                size={20}
                                                color='#000000'
                                        />
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
        pencileStyle: {
                marginLeft: 10
        },
        leftContainer: {
                flex: 1,
                flexDirection: 'row',
                marginLeft: 10
        },
        titleText: {
                fontSize: 20
        },
        rightContainer: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 10
        }
});

export { Header };
