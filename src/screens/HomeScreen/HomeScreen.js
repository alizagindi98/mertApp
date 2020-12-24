import React, { useEffect, useState } from 'react';
import {Text, View, Image} from 'react-native';
import { firebase } from '../../firebase/config';

export default function HomeScreen(props) {
  const userID = props.extraData.id
  const now = Date()

  const [nextShift, setNextShift] = useState([])
  const [shifts, setShifts] = useState([])

  const shiftsRef = firebase.firestore().collection('shifts')

  useEffect(() => {
    setNextShift(null)
    shiftsRef
      .where("userID", "==", userID)
      .orderBy("startTime", "asc")
      .onSnapshot(
        querySnapshot => {
          const newshifts = []
          var curNextShift = null
          querySnapshot.forEach(doc => {
            const shift = doc.data()
            const shiftDate = shift.startTime.toDate()
            if (now <= Date(shiftDate.toString()) && ((curNextShift == null) || Date(shiftDate.toString()) < Date(curNextShift.toString()))) {
              curNextShift = shiftDate
            }
          });
          setNextShift(curNextShift)
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
            Contacts{"\n"}
            Leah{"\n"}
            Michael
          </Text>
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
            Remaining Hours for the Month{"\n"}
            30{"\n"}
            That is 4 hours to go
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
