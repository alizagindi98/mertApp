import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import FormLink from '../../components/FormsScreen/FormLink'
// import { firebase } from '../../firebase/config'


export default function ScheduleScreen(props) {

    return (
        <SafeAreaView style={styles.schedContainer}>

            <FormLink
                title="Schedule"
                link='https://docs.google.com/spreadsheets/d/1Pq4hw8gndR5udZWyPe-OUQprV2KWUIl4srjstPDu1AU/edit?usp=sharing'
            />
            <FormLink
                title="Schedule Form"
                link='https://media1.giphy.com/media/3o72FkiKGMGauydfyg/giphy.gif'
            />
        </SafeAreaView>
    )
}