import React from 'react'
import Tabs from './tabs'
import SpareParts from '../screens/SpareParts/SparePart'

import { createStackNavigator } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function Navigate () {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Tab"
                component={Tabs}
                options={{title:"Tabs"}}
            />
            <Stack.Screen 
                name="SparePart"
                component={SpareParts}
                options={{title:"Spare"}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}