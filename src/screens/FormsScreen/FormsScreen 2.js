import React from 'react'
import { Text, View } from 'react-native'

export default function FormsScreen(props) {
    const onPAProtocolPress = () => {
        (e) => {
            e.preventDefault();
            window.location.href='https://www.health.pa.gov/topics/Documents/EMS/2020%20PA%20BLS%20Protocols.pdf';
            }
    }

    const onProbationaryLogPress = () => {
        (e) => {
            e.preventDefault();
            window.location.href='https://docs.google.com/spreadsheets/d/1JwWX54awiqbkUmAZoGOjP5DgkO30EMyK7vPrUyH9frU/edit#gid=0';
            }
    }

    const onMertEquipmentPress = () => {
        (e) => {
            e.preventDefault();
            window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSeCPymiaEl2AgXcFctGIuE9jurxku6evYMS5RO1w1ywrPU5-w/viewform';
            }
    }
    const onAcceptedAbbreviationsPress = () => {
        (e) => {
            e.preventDefault();
            window.location.href='https://docs.google.com/spreadsheets/d/163IBjttNdGNvjn3-k9jIHE82uoupQFl4FG_XhJOCtBg/edit?ts=5b718fe6#gid=0';
            }
    }

    
    return (
        <View>
            <Text>Forms Screen</Text>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onPAProtocolPress()}>
                    <Text style={styles.buttonTitle}>PA Protocol</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onProbationaryLogPress()}>
                    <Text style={styles.buttonTitle}>Probationary Logs</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onMertEquipmentPress()}>
                    <Text style={styles.buttonTitle}>MERT Equipment Checkout</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onAcceptedAbbreviationsPress()}>
                    <Text style={styles.buttonTitle}>MERT Equipment Checkout</Text>
            </TouchableOpacity>
        </View>
    )
}