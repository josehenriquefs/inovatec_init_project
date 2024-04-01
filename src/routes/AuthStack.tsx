import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Welcome from "../views/welcome/WelcomeScreen";
import Login from "../views/login/LoginScreen";
import Signup from "../views/register/RegisterScreen";

const Stack = createNativeStackNavigator();

export function AuthStack(){
    return (
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={Signup}
                    options={{
                        headerShown: false
                    }}
                />
        </Stack.Navigator>
    );
}