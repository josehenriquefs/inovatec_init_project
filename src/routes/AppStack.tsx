import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../views/home/HomeScreen";

const Stack = createNativeStackNavigator();

export function AppStack(){
    return (
        <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
        </Stack.Navigator>
    );
}