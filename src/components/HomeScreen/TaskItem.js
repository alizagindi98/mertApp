import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TaskItem = ({item, deleteTask}) => {
    return (
        <TouchableOpacity>
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}> {item.text} </Text>
                <AntDesign name="closecircleo" size={15} color="black" onPress={() => deleteTask(item.id)}/> 
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    entityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    }
})

export default TaskItem;