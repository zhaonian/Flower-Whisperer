import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { Brightness } from './components/brightness';
import { Humidity } from './components/humidity';
import { SunIcon, WaterIcon, InfoIcon } from './components/common/NavBar';


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
                                                                key='brightness'
                                                                hideNavBar
                                                                icon={SunIcon}
                                                                component={Brightness}
                                                                initial
                                                        />
                                                        <Scene
                                                                key='humidity'
                                                                hideNavBar
                                                                icon={WaterIcon}
                                                                component={Humidity}
                                                        />
                                                        <Scene
                                                                key='notification'
                                                                hideNavBar
                                                                icon={InfoIcon}
                                                                component={Brightness}
                                                        />
                                                        <Scene
                                                                key='search'
                                                                hideNavBar
                                                                icon={WaterIcon}
                                                                component={Brightness}
                                                        />
                                                        <Scene
                                                                key='bookmark'
                                                                hideNavBar
                                                                icon={SunIcon}
                                                                component={Brightness}
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
