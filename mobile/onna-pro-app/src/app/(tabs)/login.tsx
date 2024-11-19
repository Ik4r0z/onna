import React, { useRef } from "react"
import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

import Toast from "react-native-toast-message"
import { showToast } from "@/components/toast"

import { useAsyncStorage } from "@/hooks/useAsyncStorage"
import api from "@/services/api"

import { useRouter } from "expo-router"

import { useAuth } from "@/context/authContext"
 
export default function Login() {
    // async storage
    const { createData, clearStorage } = useAsyncStorage()

    // hooks (autenticação)
    const router = useRouter()
    const {login} = useAuth()

    const emailRef = useRef("")
    const passwordRef = useRef("")

    // login_Tipo_Usuario
    const Login = async (email: string, senha: string) => {
        try {
            const res = await api.post("/api/auth/tipoUsuario", {
                email: email, // Yasmim@gmail.com
                senha: senha  // EssaContaNaoLoga
            })

            if(res.status === 200) {
                await clearStorage()
                await createData("@login", res.data)
                router.push("/(dashboard)/chat")
            }
        } 
        catch (error) {
            showToast("error", "ERRO", "" + error)
            console.error
            return
        }
    }

    // validação e inserção (autenticação)
    const LoginHandle = async () => {
        try {
            if(!emailRef.current || !passwordRef.current){
                showToast("error", "ERRO", "Preencha todos os campos, por favor!")
                return
            }
    
            const res = await login(emailRef.current, passwordRef.current)
            if(!res.success){
                showToast("info", "INFORMAÇÃO", "" + res.msg)
            }

            Login(emailRef.current, passwordRef.current)
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
                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular mt-10" >Email</Text>
                            <TextInput className="w-[75%] h-[50px] bg-gray text-[18.75px] text-justify color-black font-Oregular rounded-[12.5px] pl-[6.25px] shadow-lg shadow-black"
                                placeholder=""
                                placeholderTextColor={"black"}
                                keyboardType="default"
                                onChangeText={value => emailRef.current = value}
                            />

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular" >Senha</Text>
                            <TextInput className="w-[75%] h-[50px] bg-gray text-[18.75px] text-justify color-black font-Oregular rounded-[12.5px] pl-[6.25px] mb-[10px] shadow-lg shadow-black"
                                placeholder="**********"
                                placeholderTextColor={"black"}
                                keyboardType="default"
                                secureTextEntry={true} // adicionar material icon para visualização
                                onChangeText={value => passwordRef.current = value}
                            />

                            <Text className="w-[75%] text-[18.75px] color-black font-Iregular mb-[10px]" >Esqueceu Senha?
                                <Text className="text-[18.75px] color-green-800 font-Iregular" onPress={() => router.push("/recoveryPassword")} > Clique aqui</Text>
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