import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Foundation from 'react-native-vector-icons/Foundation';
import { getTemperatureAndHumidity } from '../../actions/HealthAction';


class Temperature extends Component {

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
                                        {
                                                (this.props.temperature < 25) &&
                                                <View style={styles.numberContainer}>
                                                        <Text style={styles.lowTemp}>
                                                                {this.props.temperature}
                                                        </Text>
                                                        <Text style={styles.degree}> °C</Text>
                                                </View>
                                        }
                                        {
                                                (this.props.temperature >= 25 && this.props.temperature <= 28) &&
                                                <View style={styles.numberContainer}>
                                                        <Text style={styles.goodTemp}>
                                                                {this.props.temperature}
                                                        </Text>
                                                        <Text style={styles.degree}> °C</Text>
                                                </View>
                                        }
                                        {
                                                (this.props.temperature > 28) &&
                                                <View style={styles.numberContainer}>
                                                        <Text style={styles.highTemp}>
                                                                {this.props.temperature}
                                                        </Text>
                                                        <Text style={styles.degree}> °C</Text>
                                                </View>
                                        }
                                        <View style={styles.notes}>
                                                {
                                                        (this.props.temperature < 25) ?
                                                                <View>
                                                                        <Text>Temperature lower than 25 is not good for photosynthesis</Text>
                                                                        <Text>Please move your plant to a warmer place</Text>
                                                                </View>
                                                                :
                                                                (this.props.temperature > 28) ?
                                                                        <View>
                                                                                <Text>Temperature higher than 28 is not good for photosynthesis</Text>
                                                                                <Text>Please move your plant to a cooler place</Text>
                                                                        </View>
                                                                        :
                                                                        <View>
                                                                                <Text>Temperature between 25 and 28 is the best for photosynthesis</Text>
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
        lowTemp: {
                fontSize: 50,
                fontWeight: 'bold',
                color: 'rgb(0, 204, 255)'
        },
        goodTemp: {
                fontSize: 50,
                fontWeight: 'bold',
                color: 'rgb(20, 154, 154)'
        },
        highTemp: {
                fontSize: 50,
                fontWeight: 'bold',
                color: 'red'
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
                marginTop: 15
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
                temperature: state.health.temperature,
                time: state.health.time
        };
};

export default connect(mapStateToProps, {
        getTemperatureAndHumidity
})(Temperature);
