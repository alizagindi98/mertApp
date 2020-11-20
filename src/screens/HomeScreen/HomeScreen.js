import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, SafeAreaView, StyleSheet, location} from 'react-native';
import styles from './styles';
import TaskItem from '../../components/HomeScreen/TaskItem';

import { firebase } from '../../firebase/config';



export default function HomeScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    const entityRef = firebase.firestore().collection('entities')
    const userID = props.extraData.id

    useEffect(() => {
        entityRef
            .where("authorID", "==", userID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const deleteTask = (id) => {
        entityRef.doc(id).delete()
    }


    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                text: entityText,
                authorID: userID,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }

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

            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('Forms')}>
                <Text style={styles.buttonTitle}>Forms</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('Profile')}>
                <Text style={styles.buttonTitle}>Profile</Text>
            </TouchableOpacity>

            <View style={styles.formContainer}>
              <TextInput
                  style={styles.input}
                  placeholder='Add new weekly task'
                  placeholderTextColor="#aaaaaa"
                  onChangeText={(text) => setEntityText(text)}
                  value={entityText}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
              />
              <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                  <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>


            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={TaskItem}
                        renderItem={({item}) => (
                            <TaskItem
                              item={item}
                              deleteTask={deleteTask}
                            />
                          )}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
        </SafeAreaView>
    )
}
