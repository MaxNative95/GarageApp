import React, { useContext, useRef, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, FlatList, Button } from "react-native";
import Garage from '../screens/Garage/index';
import Details from '../screens/Details/index';

interface HomeStackProps { }

const Stack = createStackNavigator();

function Feed() {
    return (
        <div>
            Hello
        </div>
    )
}

const HomeStack: React.FC<HomeStackProps> = ({ }) => {
    return (
        <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen
                name="Home"
                options={{
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    alert('Hello alert')
                                }}
                            >
                                <Text>LOGOUT</Text>
                            </TouchableOpacity>
                        );
                    }
                }}
                component={Garage}
            />
            <Stack.Screen
                name="Details"
                options={{
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    alert('Hello alert')
                                }}
                            >
                                <Text>LOGOUT</Text>
                            </TouchableOpacity>
                        );
                    }
                }}
                component={Details}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;