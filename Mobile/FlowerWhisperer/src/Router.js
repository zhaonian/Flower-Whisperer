import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { Temperature } from './components/temperature';
import { Profile } from './components/profile';
import { Humidity } from './components/humidity';
import { TemperatureIcon, WaterIcon, InfoIcon } from './components/common/NavBar';


class RouterComponent extends Component {
        render() {
                return (
                        <Router>
                                <Scene hideNavBar>
                                        <Scene key='home'>
                                                <Scene
                                                        panHandlers={null}
                                                        key='navigationTab'
                                                        tabs
                                                        swipeEnabled={false}
                                                        tabBarStyle={styles.tabBarStyle}
                                                        showLabel={false}
                                                        tabBarPosition={'bottom'}
                                                >
                                                        <Scene
                                                                key='temperature'
                                                                title='Temperature'
                                                                icon={TemperatureIcon}
                                                                component={Temperature}
                                                                initial
                                                        />
                                                        <Scene
                                                                key='notification'
                                                                title='Profile'
                                                                icon={InfoIcon}
                                                                component={Profile}
                                                        />
                                                        <Scene
                                                                key='humidity'
                                                                title='Humidity'
                                                                icon={WaterIcon}
                                                                component={Humidity}
                                                        />
                                                </Scene>
                                        </Scene>
                                </Scene>
                        </Router>
                );
        }
}

const styles = StyleSheet.create({
        tabBarStyle: {
                backgroundColor: '#ffffff',
        },
        navBarStyle: {
                backgroundColor: '#ffffff'
        }
});

export default RouterComponent;
