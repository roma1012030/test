import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native'

const LoopScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Loop Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9FBFF'
    }
})


export default LoopScreen