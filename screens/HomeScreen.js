import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Login } from './Login';


export const HomeScreen = () => {
    return (
        <View>


            <Text className="text-center text-4xl mt-10">Welcome, username!</Text>
            <Text className="text-center text-2xl mt-1">Your current HighScore is: 0 Steps!</Text>
            <TouchableOpacity className=" flex-auto bg-lime-200 mt-2 items-center mx-32 my-3 align-middle"><Text className="align-middle"><FontAwesome name="heartbeat" size={24} color="#449DD1" className="mr-4" />Start Session!</Text></TouchableOpacity>

            <Login className="mt-50" />
        </View>

    )
}
