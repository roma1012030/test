import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native'

const UserScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>User Screen</Text>
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


export default UserScreen