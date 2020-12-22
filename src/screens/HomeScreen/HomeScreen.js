import React, { useEffect, useState } from 'react';
import {Text, View, Image} from 'react-native';
import { firebase } from '../../firebase/config';



export default function HomeScreen(props) {

  const [entityText, setEntityText] = useState('')
  const [entities, setEntities] = useState([])

  const entityRef = firebase.firestore().collection('users')
  const userID = props.extraData.id

  useEffect(() => {
      console.log(userID);
      entityRef
          .where("id", "==", userID)
          .orderBy('createdAt', 'desc')
          .onSnapshot(
              querySnapshot => {
                  const newEntities = []
                  querySnapshot.forEach(doc => {
                      const entity = doc.data()
                      entity.id = doc.id
                      newEntities.push(entity)
                      console.log(entityRef.email);
                  });
                  setEntities(newEntities)
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
                Next Shift{"\n"}
                Thursday 12/12/2020{"\n"}
                3:00-5:00pm
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
