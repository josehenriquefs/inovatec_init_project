import React, { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";
import { authService } from "../lib/services/authService";
import { Alert } from "react-native";
import { getUsers, registerUser } from "../lib/services/api";

export interface AuthData {
    token: string;
    email: string;
    name: string;
  }

interface AuthContextData{
    authData?: AuthData;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

export const AuthProvider: React.FC<AuthContextData> = ({children}) => {

    useEffect(()=>{ 
        loadFromStorage();
    },[]);

    async function loadFromStorage(){
        const auth = await AsyncStorage.getItem('@AuthData');
        if(auth){
            setAuth(JSON.parse(auth) as AuthData);
        }
    }
    
    const [authData, setAuth] = useState<AuthData>();

    async function signIn(email: string, password: string){
        try{
            const auth = await authService.signIn(email,password);
            setAuth(auth);
            AsyncStorage.setItem('@AuthData',JSON.stringify(auth));
        }catch (error: any){
            Alert.alert(error.message,'Tente novamente');
        }     
    }

    async function signOut(){
        setAuth(undefined);
        AsyncStorage.removeItem('@AuthData');
    }

    return (
        <AuthContext.Provider value={{authData, signIn, signOut,children}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}