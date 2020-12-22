

import TaskItem from '../../components/TasksScreen/TaskItem';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList, Keyboard } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config';

export default function WeeklyTasks(props) {


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


    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder='Add new weekly task!'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEntityText(text)}
                value={entityText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

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
        </View>


    )
}
