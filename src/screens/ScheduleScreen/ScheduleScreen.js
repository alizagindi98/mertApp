import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import { firebase } from '../../firebase/config'


export default function ScheduleScreen(props) {

    return (
        <SafeAreaView style={styles.verticalContainer}>

            <SafeAreaView style={styles.horizontalContainer}>
                <SafeAreaView style={styles.verticalContainer}>
                    <Text> Schedule Here </Text>
                </SafeAreaView>
            </SafeAreaView>
            {/* Insert extra profile info here */}
        </SafeAreaView>
    )
}