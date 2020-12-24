import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import { firebase } from '../../firebase/config';
import * as Linking from 'expo-linking';
import ForwardCall from '../../components/HomeScreen/ForwardCall.js';

export default function HomeScreen(props) {
  const userID = props.extraData.id
  const now = Date()

  const [nextShift, setNextShift] = useState([])
  const shiftsRef = firebase.firestore().collection('shifts')

  const [monthlyHours, setMonthlyHours] = useState([])
  const requiredMonthlyHours = 24.0

  useEffect(() => {
    setNextShift(null)
    shiftsRef
      .where("userID", "==", userID)
      .orderBy("startTime", "asc")
      .onSnapshot(
        querySnapshot => {
          var curNextShift = null
          var monthlyHours = 0.0
          querySnapshot.forEach(doc => {
            const shift = doc.data()
            const shiftStartDate = shift.startTime.toDate()
            const shiftEndDate = shift.endTime.toDate()
            if (now <= Date(shiftStartDate.toString()) && ((curNextShift == null) || Date(shiftStartDate.toString()) < Date(curNextShift.toString()))) {
              curNextShift = shiftStartDate
            }
            else if (Date(shiftEndDate.toString()) < now && Date(shiftEndDate.toString()).getMonth() == now.getMonth() && Date(shiftEndDate.toString()).getYear() == now.getYear() ) {
              monthlyHours += (shiftEndDate.getTime() - shiftStartDate.getTime()) / (1000 * 60 * 60)
            }
          });
          setNextShift(curNextShift)
          setMonthlyHours(monthlyHours)
        },
        error => {
          console.log(error)
        }
      )
  }, [])

  const [contacts, setContacts] = useState([])
  const contactsRef = firebase.firestore().collection('contacts')
  const [helper, setHelper] = useState([])

  useEffect(() => {
    contactsRef
      .orderBy("name", "asc")
      .onSnapshot(
        querySnapshot => {
          const contactList = []
          querySnapshot.forEach(doc => {
            const contact = doc.data()
            contactList.push(contact)
            setHelper(contact.name)
          });
          setContacts(contactList)
        },
        error => {
          console.log(error)
        }
      )
  }, [])




  return (
    <View
      style={{backgroundColor: "#fff",
      flex: 1,
    }}>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
        }}>
        <View
          style={{
            backgroundColor: "dodgerblue",
            flex: 2,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text>
            {nextShift != null ? "Next Shift\n" + nextShift : "No upcoming shifts"}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flex: 2,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text>
            Contacts:
          </Text>
          <FlatList
              data={contacts}
              renderItem={Text}
              renderItem={({item}) => <ForwardCall href={"tel:" + item.phoneNumber} text={item.name}> </ForwardCall>}
              keyExtractor={(item) => item.id}
              removeClippedSubviews={true}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
        }}>
        <View
          style={{
            backgroundColor: "tomato",
            flex: 2,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text>
            Hours this month: {"\n"}
            {monthlyHours} out of {requiredMonthlyHours}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "gold",
            flex: 2,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text>
            Recent Notifications{"\n"}
            Pleas fill out your availability form{"\n"}
            Training this Sunday
          </Text>
        </View>
      </View>
    </View>
  )
}
