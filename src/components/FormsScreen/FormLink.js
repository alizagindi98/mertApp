import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import * as Linking from 'expo-linking';


const FormLink = ({title, link}) => {
    const styles = StyleSheet.create({
        // ...
        appButtonContainer: {
          elevation: 8,
          backgroundColor: "lightblue",
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 12,
          width: '80%',
          padding:'20'
        },
        appButtonText: {
          fontSize: 18,
          color: "#fff",
          fontWeight: "bold",
          alignSelf: "center",
          textTransform: "uppercase"
        }
      });

    return (
        <TouchableOpacity onPress={() => Linking.openURL(link)} style={styles.appButtonContainer}>
            <Text style={{textAlign: 'center'}}> {title} </Text>
        </TouchableOpacity>
    
    )

        

}

const styles = StyleSheet.create({

})

export default FormLink;

