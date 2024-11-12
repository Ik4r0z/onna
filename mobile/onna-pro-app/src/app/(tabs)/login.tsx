import React, { useState } from "react"
import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

import Toast from "react-native-toast-message"
import { showToast } from "@/components/toast"

import { useAsyncStorage } from "@/hooks/useAsyncStorage"
import api from "@/services/api"

import { router } from "expo-router"
 
export default function Login() {
    // async storage
    const { createData, clearStorage } = useAsyncStorage()

    // hooks
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    // login_Tipo_Usuario
    const Login = async (email: string, senha: string) => {
        try {
            const res = await api.post("/api/auth/tipoUsuario", {
                email: email, // Yasmim@gmail.com
                senha: senha  // C!@nm123543
            })

            if(res.status === 200) {
                await clearStorage()
                await createData("@login", res.data)
                router.push("/(dashboard)/home")
            }
        } 
        catch (error) {
            showToast("error", "ERRO", "" + error)
            console.error
            return
        }
    }

    // validação e inserção
    const LoginHandle = () => {
        try {
            if(email === "" && senha === "") {
                showToast("error", "ERRO", "Preencha todos os campos")
                console.error
                return 
            }
 
            if(email === "") {
                showToast("error", "ERRO", "Preencha o campo 'Email'")
                console.error
                return 
            }

            if(senha === "") {
                showToast("error", "ERRO", "Preencha o campo 'Senha'")
                console.error
                return 
            }

            Login(email, senha)
        }
        catch (error) {
            showToast("error", "ERRO", "" + error)
            console.error
            return
        }
    }

    // navegação
    const Router = () => {
        try {
            router.push("/recoveryPassword")
        }
        catch (error) {
            showToast("error", "ERRO", "" + error)
            console.error
            return
        }
    }

    // validação
    const RouterHandle = () => {
        try {
            Router()
        }
        catch (error) {
            showToast("error", "ERRO", "" + error)
            console.error
            return
        }
    }

    // auto inserção
    const Ghost = () => {
        try {
            setEmail("Yasmim@gmail.com")
            setSenha("C!@nm123543")
        }
        catch (error) {
            showToast("error", "ERRO", "" + error)
            console.error
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
                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular mt-10" onPress={Ghost} >Email</Text>
                            <TextInput className="w-[75%] h-[50px] bg-gray text-[18.75px] text-justify color-black font-Oregular rounded-[12.5px] pl-[6.25px] shadow-lg shadow-black"
                                placeholder=""
                                keyboardType="default"
                                onChangeText={setEmail}
                                value={email}
                            />

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular" >Senha</Text>
                            <TextInput className="w-[75%] h-[50px] bg-gray text-[18.75px] text-justify color-black font-Oregular rounded-[12.5px] pl-[6.25px] mb-[10px] shadow-lg shadow-black"
                                placeholder="**********"
                                keyboardType="default"
                                secureTextEntry={true} // adicionar material icon para visualização
                                onChangeText={setSenha}
                                value={senha}
                            />

                            <Text className="w-[75%] text-[18.75px] color-black font-Iregular mb-[10px]" >Esqueceu Senha?
                                <Text className="text-[18.75px] color-green-800 font-Iregular" onPress={RouterHandle} > Clique aqui</Text>
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
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
            <Toast />
        </SafeAreaView>
    )
}