import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native'

const ShopScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Shop Screen</Text>
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


export default ShopScreen