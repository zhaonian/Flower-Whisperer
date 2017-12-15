import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Foundation from 'react-native-vector-icons/Foundation';
import { getTemperatureAndHumidity } from '../../actions/HealthAction';


class Humidity extends Component {

        state = {
                refreshing: false,
        };

        componentWillMount() {
                this.props.getTemperatureAndHumidity();
        }

        onRefresh() {
                this.setState({ refreshing: true });
                this.props.getTemperatureAndHumidity().then(() => {
                        this.setState({ refreshing: false });
                });
        }


        render() {
                return (
                        <View style={styles.container}>
                                <View
                                        style={styles.infoContainer}
                                >
                                        <View style={styles.numberContainer}>
                                                <Text
                                                        style={[styles.number, {
                                                                color:
                                                                        (this.props.humidity > 80) ?
                                                                                'rgb(0, 204, 255)' : (this.props.humidity < 60) ?
                                                                                        'orange' : 'rgb(20, 154, 154)'
                                                        }]}
                                                >
                                                        {this.props.humidity}
                                                </Text>
                                                <Text style={styles.degree}> %</Text>
                                        </View>
                                        <View>
                                                {
                                                        (this.props.humidity < 60) ?
                                                                <View style={styles.notes}>
                                                                        <Text>Humidity lower than 60 is not good for respiration</Text>
                                                                        <Text>Please move your plant to a humidier place</Text>
                                                                </View>
                                                                :
                                                                (this.props.humidity > 80) ?
                                                                        <View style={styles.notes}>
                                                                                <Text>Humidity higher than 80 is not good for respiration</Text>
                                                                                <Text>Please move your plant to a drier place</Text>
                                                                        </View>
                                                                        :
                                                                        <View style={styles.notes}>
                                                                                <Text>Humidity between 60 and 80 is the best for respiration</Text>
                                                                                <Text>Good Job!</Text>
                                                                        </View>
                                                }
                                        </View>
                                        <Text style={styles.time}>
                                                {this.props.time}
                                        </Text>
                                </View>
                                <TouchableOpacity
                                        style={styles.btn}
                                        onPress={this.onRefresh.bind(this)}
                                >
                                        <Foundation
                                                name='refresh'
                                                size={30}
                                        />
                                </TouchableOpacity>
                        </View >
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
        infoContainer: {
                alignItems: 'center'
        },
        number: {
                fontSize: 50,
                fontWeight: 'bold'
        },
        degree: {
                fontSize: 30,
        },
        numberContainer: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
        },
        btn: {
                marginTop: 30
        },
        notes: {
                paddingHorizontal: 5,
                alignItems: 'center'
        },
        time: {
                marginTop: 15
        }
});

const mapStateToProps = (state) => {
        console.log(state);
        return {
                humidity: state.health.humidity,
                time: state.health.time
        };
};

export default connect(mapStateToProps, {
        getTemperatureAndHumidity
})(Humidity);
