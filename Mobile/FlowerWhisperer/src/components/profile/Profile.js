import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


const Aloe = require('../../images/Aloe.jpeg');

class Profile extends Component {
        render() {
                return (
                        <View style={styles.cotainer}>
                                <Image
                                        style={styles.image}
                                        source={Aloe}
                                />
                                <View style={styles.nameContainer}>
                                        <Text style={styles.name}>Name</Text>
                                        <Text style={styles.n}> Alice</Text>
                                </View>
                                <View style={styles.nameContainer}>
                                        <Text style={styles.name}>Age</Text>
                                        <Text style={styles.n}> 2.3 Years</Text>
                                </View>
                                <View style={styles.nameContainer}>
                                        <Text style={styles.name}>Classification</Text>
                                        <Text style={styles.n}> Aloaceae</Text>
                                </View>
                                <View style={styles.nameContainer}>
                                        <Text style={styles.name}>Owner</Text>
                                        <Text style={styles.n}> Luan</Text>
                                </View>
                        </View>
                );
        }
}

const styles = StyleSheet.create({
        cotainer: {
                flexDirection: 'column',
                flex: 1
        },
        image: {
                width: 100,
                height: 100,
                alignSelf: 'center',
                marginTop: 40,
                borderRadius: 10,
        },
        nameContainer: {
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
        },
        name: {
                fontSize: 17,
        },
        n: {
                marginLeft: 5,
                fontSize: 25,
                fontWeight: 'bold'
        }

});

export default Profile;
