import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import TaskItem from '../../components/TasksScreen/TaskItem';
import styles from './styles';
import { firebase } from '../../firebase/config'
import AsyncImage from '../../components/ProfileScreen/AsyncImage.js';

export default function ProfileScreen(props) {
    const userID = props.extraData.id
    const userEmail = props.extraData.email
    const fullName = props.extraData.fullName
    const gradYear = props.extraData.gradYear
    const rank = props.extraData.rank
    const profileImagePath = props.extraData.profileImagePath


    const [shifts, setShifts] = useState([])
    const shiftsRef = firebase.firestore().collection('shifts')
                
    useEffect(() => {
        shiftsRef
            .where("userID", "==", userID)
            .orderBy("startTime", "asc")
            .onSnapshot(
                querySnapshot => {
                    const newshifts = []
                    querySnapshot.forEach(doc => {
                        const shift = doc.data()
                        newshifts.push(shift)
                    });
                    setShifts(newshifts)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    return (
        <SafeAreaView style={styles.horizontalContainer}>
            <View style={styles.verticalContainer}>
                <AsyncImage image={profileImagePath} style={{ resizeMode: 'cover', width: 120, height: 120 }}/>
                <View style={styles.horizontalContainer}>
                    <Text> Name: {fullName} </Text>
                    <Text> Email: {userEmail} </Text>
                    <Text> Graduation year: {gradYear} </Text>
                    <Text> Rank: {rank} </Text>
                    <Text> ID: {userID} </Text>
                </View>
            </View>
            <Text> Upcoming shifts: </Text>
            <FlatList
                data={shifts}
                renderItem={Text}
                renderItem={({item}) => <Text style={styles.item}>{item.startTime.toDate().toLocaleString()}</Text>}
                keyExtractor={(item) => item.id}
                removeClippedSubviews={true}
            />
        </SafeAreaView>
    )
}