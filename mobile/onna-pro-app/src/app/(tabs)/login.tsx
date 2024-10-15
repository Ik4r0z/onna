import React, { useState } from "react"
import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

import { Link } from "expo-router"

import api from "@/services/api"

type Login = { // tipagem dos parâmetros
    email: string;
    senha: string;
}

export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    async function login_Tipo_Usuario(data: Login) {
        try {
            const res = await api.post("/api/auth/tipoUsuario", {
                email: data.email,
                senha: data.senha
            })

            if(res.status === 200) {
                console.log(res.data); // futuramente, deverá ser um toast (guardar res.data no async storage)
            }
        } 
        catch (error) {
            console.log("ERRO: " + error);
        }
    }

    const handleLogin = () => { // validação dos dados
        try {
            if(email === "" || senha === "") {
                return // futuramente, deverá ser um toast
            }

            const data = {
                email: email, 
                senha: senha 
            }

            login_Tipo_Usuario(data)
        }
        catch (err) {
            console.log("ERRO " + err)
        }
    }

    return (
        <SafeAreaView className="flex-1 bg-green-500" >   
            <View className="w-full h-full justify-center gap-[50px]" >
                <StatusBar barStyle={"light-content"} />

                <View className="w-full justify-end items-end" >
                    <Image className="w-[125px] h-[134.5px]"
                        source={require("@/assets/images/leaves.png")}
                    />
                </View>

                <KeyboardAvoidingView className="flex-1" >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                        <View className="w-full h-full bg-white justify-center items-center rounded-t-[50px] gap-[12.5px]" >
                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular mt-[10px]" >Email</Text>
                            <TextInput className="w-[75%] h-[50px] bg-gray text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px] shadow-xl shadow-black"
                                placeholder="email@example.com"
                                keyboardType="email-address"
                                onChangeText={setEmail}
                                value={email}
                            />

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular" >Senha</Text>
                            <TextInput className="w-[75%] h-[50px] bg-gray text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px] mb-[10px] shadow-xl shadow-black"
                                placeholder="**********"
                                keyboardType="visible-password"
                                onChangeText={setSenha}
                                value={senha}
                            />

                            <Text className="w-[75%] text-[18.75px] color-black font-Iregular mb-[10px]" >Esqueceu Senha?
                                <Link href={"/recoveryPassword"} >
                                    <Text className="text-[18.75px] color-green-800 font-Iregular" > Clique aqui</Text>
                                </Link>
                            </Text>

                            <Pressable className="w-[75%] h-[50px] bg-green-800 justify-center items-center rounded-[12.5px] shadow-xl shadow-black" onPress={handleLogin} >
                                <Link href={"/(dashboard)/home"} >
                                    <Text className="text-[18.75px] color-white font-Imedium" >Login</Text>
                                </Link>
                            </Pressable>

                            <Text className="w-[75%] text-[18.75px] text-center color-black font-Iregular mb-[10px]" >Ou</Text>

                            <View className="w-[75%] h-[50px] flex-row justify-center items-center gap-[12.5px]" >
                                <Image className="w-[50px] h-[50px]"
                                    source={require("@/assets/images/facebook.png")}
                                />
                                <Image className="w-[50px] h-[50px]"
                                    source={require("@/assets/images/google.png")}
                                />
                                <Image className="w-[50px] h-[50px]"
                                    source={require("@/assets/images/apple.png")}
                                />
                            </View>

                            <Text className="w-[75%] text-[18.75px] text-center color-black font-Oregular" >Não possui cadastro?
                                <Link href={"/signUp"} >
                                    <Text className="text-[18.75px] color-green-800 font-Oregular" > Cadastre-se</Text>
                                </Link>
                            </Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}