import { View, Text, Pressable, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
import TextButton from '../../components/TextButton';
import Logo from '../../components/Logo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../contexts/Auth';

const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const {signIn} = useAuth();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkValidEmail, setCheckValidEmail] = useState(false);

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
                        fontSize: 16,
                        color: COLORS.black
                    }}>Entre e aproveite!</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                        color: COLORS.black
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
                            placeholderTextColor={COLORS.blackLighter}
                            color={COLORS.black}
                            cursorColor={COLORS.secondary}
                            value={email}
                            onChangeText={(text)=>handleCheckEmail(text)}
                            keyboardType='email-address'
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
                            placeholderTextColor={COLORS.blackLighter}
                            color={COLORS.black}
                            cursorColor={COLORS.secondary}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%",                                            
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
                    marginVertical: 6
                }}>
                    
                    <TextButton 
                        title='Esqueceu a senha?'
                        position = 'absolute'
                        right = {12}
                    
                    />
                </View>

                <Button
                    title="Login"
                    onPress={()=>{
                        signIn(email,password);
                    }}
                    filled
                    style={{
                        marginTop: 60,
                        marginBottom: 4,
                    }}
                    
                />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Ainda não tem uma conta ? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Cadastre-se</Text>
                    </Pressable>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login