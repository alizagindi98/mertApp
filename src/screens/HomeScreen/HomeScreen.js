import React, { useEffect, useState } from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import styles from './styles';


export default function HomeScreen(props) {

    const homeStyles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            alignItems: "center"
        },
        section: {
            flex: 1,
        }
    });

    return (
        <SafeAreaView style={homeStyles.container}>
            

            <View style={homeStyles.section}>
                <Text>
                    Basic Profile Info
                </Text>
            </View>

            <View style={homeStyles.section}>
                <Text>
                    Schedule will go here
                </Text>
            </View>

            <View style={homeStyles.section}>
                <Text>
                    Dashboard will go here
                </Text>
            </View>

            <View style={homeStyles.section}>
                <Text>
                    Links to Other Pages Below
                </Text>
            </View>

        </SafeAreaView>
    )
}
