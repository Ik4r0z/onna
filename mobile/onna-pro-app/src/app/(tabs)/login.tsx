import React, { useState } from "react"
import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

import Toast from "react-native-toast-message"
import { showToast } from "@/components/toast"

import { Link, router } from "expo-router"

import api from "@/services/api"

export default function Login() {
    // tipagem dos parâmetros
    type LoginData = { 
        email: string
        senha: string
    }

    // hooks
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    // login
    async function LoginTipoUsuario(data: LoginData) {
        try {
            const res = await api.post("/api/auth/tipoUsuario", {
                email: data.email,
                senha: data.senha
            })

            if(res.status === 200) {
                console.log(res.data); // guardar res.data no async storage
                router.push("/(dashboard)/home")
            }
        } 
        catch (error) {
            const data = { type: "error", text1: "ERRO", text2: "" + error }
            showToast(data)
            return
        }
    }

    // salvando no async storage
    async function SaveData() {

    }

    // validação e inserção dos dados
    const LoginHandle = () => {
        try {
            if(email === "" && senha === "") {
                const data = { type: "error", text1: "ERRO", text2: "1" }
                showToast(data)
                return 
            }
 
            if(email === "") {
                const data = { type: "error", text1: "ERRO", text2: "2" }
                showToast(data)
                return 
            }

            if(senha === "") {
                const data = { type: "error", text1: "ERRO", text2: "3" }
                showToast(data)
                return 
            }

            const data = {
                email: email, 
                senha: senha 
            }

            LoginTipoUsuario(data)
        }
        catch (error) {
            const data = { type: "error", text1: "ERRO", text2: "" + error }
            showToast(data)
            return
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
                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular mt-10" >Email</Text>
                            <TextInput className="w-[75%] h-[50px] bg-gray text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px] shadow-lg shadow-black"
                                placeholder="email@example.com"
                                keyboardType="email-address"
                                onChangeText={setEmail}
                                value={email}
                            />

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular" >Senha</Text>
                            <TextInput className="w-[75%] h-[50px] bg-gray text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px] mb-[10px] shadow-lg shadow-black"
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

                            <Pressable className="w-[75%] h-[50px] bg-green-800 justify-center items-center rounded-[12.5px] shadow-lg shadow-black" onPress={LoginHandle} >
                                <Text className="text-[18.75px] color-white font-Imedium" >Login</Text>
                            </Pressable>

                            <Text className="w-[75%] text-[18.75px] text-center color-black font-Iregular mb-[10px]" >Ou</Text>

                            <View className="w-[75%] h-[50px] flex-row justify-center items-center gap-[18.75px]" >
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

                            <Text className="w-[90%] text-[18.75px] text-center color-black font-Oregular" >Não possui cadastro?
                                <Link href={"/signUp"} >
                                    <Text className="text-[18.75px] color-green-800 font-Oregular" > Cadastre-se</Text>
                                </Link>
                            </Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
            <Toast />
        </SafeAreaView>
    )
}