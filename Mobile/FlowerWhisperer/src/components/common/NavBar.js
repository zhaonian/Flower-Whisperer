import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TemperatureIcon = ({ focused }) => {
        return (
                <MaterialCommunityIcon
                        name='oil-temperature'
                        size={25}
                        color={focused ? 'orange' : 'black'}
                />
        );
};

const WaterIcon = ({ focused }) => {
        return (
                <Ionicon
                        name='ios-water-outline'
                        size={30}
                        color={focused ? 'rgb(0, 204, 255)' : 'black'}
                />
        );
};

const InfoIcon = ({ focused }) => {
        return (
                <MaterialCommunityIcon
                        name='flower'
                        size={30}
                        color={focused ? 'rgb(20, 154, 154)' : 'black'}
                />
        );
};

export { TemperatureIcon, WaterIcon, InfoIcon };
