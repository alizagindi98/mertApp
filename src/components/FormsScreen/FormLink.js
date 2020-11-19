import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import * as Linking from 'expo-linking';


const FormLink = ({title, link}) => {
    return (
        <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <Text style={styles.buttonTitle}> {title} </Text>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})

export default FormLink;