import React, { useEffect, useState } from 'react';
import {Text, View, Image} from 'react-native';
import { firebase } from '../../firebase/config';



export default function HomeScreen(props) {
    // const userID = props.extraData.id
    // const now = Date()

    // const [nextShiftString, setNextShiftString] = useState([])
    // const [shifts, setShifts] = useState([])
    // const shiftsRef = firebase.firestore().collection('shifts')

    // useEffect(() => {
    //   setNextShiftString(null)
    //   shiftsRef
    //     .where("userID", "==", userID)
    //     .orderBy("startTime", "asc")
    //     .onSnapshot(
    //       querySnapshot => {
    //         const newshifts = []
    //         querySnapshot.forEach(doc => {
    //           const shift = doc.data()
    //           newshifts.push(shift)
    //           const shiftDate = shift.startTime.toDate()
    //           if (now <= shiftDate) {
    //             setNextShiftString(shift.startTime.toDate().toLocaleString())
    //           }
    //         });
    //         setShifts(newshifts)
    //       },
    //       error => {
    //         console.log(error)
    //       }
    //     )
    // }, [])

    // const nextShift = new Date()
                /*{nextShiftString != null ? "Next Shift\n" + nextShiftString : "No upcoming shifts"}*/

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
              {"Working on upcoming shifts"}
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
