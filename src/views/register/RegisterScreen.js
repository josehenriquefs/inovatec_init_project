import { View, Text, Pressable, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextButton from '../../components/TextButton';
import Logo from '../../components/Logo';
import Checkbox from "expo-checkbox"
import Button from '../../components/Button';
import { registerUser } from '../../lib/services/api';
import { useAuth } from '../../contexts/Auth';


const Signup = ({ navigation }) => {
    
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [checkValidEmail, setCheckValidEmail] = useState(false);
    const {signIn} = useAuth();

    const handleCheckEmail = (text) => {
        let re = /\S+@\S+\.\S+/;
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setEmail(text)
        if(re.test(text)|| regEmail.test(text)){
            setCheckValidEmail(false);
        }else{
            setCheckValidEmail(true);
        }
    }
   
   
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Logo/>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Crie sua conta
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Conecte-se aos seus amigos hoje!</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: COLORS.black,
                        marginVertical: 8
                    }}>Email</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 28,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Digite seu email'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={(text)=>handleCheckEmail(text)}
                            color={COLORS.black}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>
                {checkValidEmail ? (<Text style={{color: COLORS.red,alignItems: 'flex-end'}}>Email inválido</Text>) : (<Text></Text>)}
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: COLORS.black,
                        marginVertical: 8
                    }}>Senha</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 28,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Digite sua senha'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            onChangeText={(text)=>setPassword(text)}
                            value={password}
                            color={COLORS.black}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>             
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text style={{color: COLORS.black, fontSize: 14}}>Eu concordo com os 
                        
                    </Text>
                    <TextButton 
                            title=' Termos e Condições de Uso'
                            backgroundColor={COLORS.darkBlue} 
                            fontSize={14} 
                            position='relative'
                            fontWeight='bold'          
                        />
                    
                </View>

                <Button
                    title="Cadastrar"
                    filled
                    onPress={()=>{
                        if(isChecked && !checkValidEmail){
                            registerUser(email,password);
                            signIn(email,password);
                            console.log(signIn());
                        }
                    }}
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />
                {!isChecked ? (<Text style={{color: COLORS.red ,alignItems: 'flex-end'}}>Precisa aceitar os termos para continuar com o cadastro</Text>) : (<Text></Text>)}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Já possui uma conta?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signup