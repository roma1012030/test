import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,  } from 'react-native'

export default function HomeScreen ({ navigation }) {
    const loadScene = () => {
        navigation.navigate('SparePart')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={loadScene}>
                <Text>123</Text>
            </TouchableOpacity>
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

