import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    verticalContainer: {
        flex: 1,
        height: 140,
        flexDirection: 'row',
    },
    horizontalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
})