import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import FormLink from '../../components/FormsScreen/FormLink'
// import { firebase } from '../../firebase/config'


export default function ScheduleScreen(props) {

    return (
        <SafeAreaView style={styles.schedContainer}>

            <FormLink
                title="Click Here to See Full Schedule"
                link='https://docs.google.com/spreadsheets/d/1Pq4hw8gndR5udZWyPe-OUQprV2KWUIl4srjstPDu1AU/edit?usp=sharing'
            />
            <View>
                <br></br>
                <br></br>
            </View>
            <Image source={require('./Schedule.png')} 
                    style={{ resizeMode: 'cover', width: '50%', height: '50%' }}/>
            <View>
                <br></br>
                <br></br>
            </View>
            <FormLink
                title="Schedule Form"
                link='https://media1.giphy.com/media/3o72FkiKGMGauydfyg/giphy.gif'
            />
        </SafeAreaView>
        
    )
}