import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import { firebase } from '../../firebase/config'


export default function ProfileScreen(props) {
    const userID = props.extraData.id
    const userEmail = props.extraData.email
    const fullName = props.extraData.fullName

    return (
        <SafeAreaView style={styles.verticalContainer}>
            {/* Insert Profile picture here */}
            <SafeAreaView style={styles.horizontalContainer}>
                <SafeAreaView style={styles.verticalContainer}>
                    <Text> {fullName} </Text>
                    <Text> {userEmail} </Text>
                    <Text> The graduation year of the user will come here </Text>
                    <Text> The rank of the user will come here </Text>
                </SafeAreaView>
            </SafeAreaView>
            {/* Insert extra profile info here */}
        </SafeAreaView>
    )
}