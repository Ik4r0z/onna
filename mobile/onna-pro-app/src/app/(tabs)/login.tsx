import React, { useState } from "react"
import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

import Toast from "react-native-toast-message"
import { showToast } from "@/components/toast"

import { useAsyncStorage } from "@/hooks/useAsyncStorage"

import { Link, router } from "expo-router"

import api from "@/services/api"
 
export default function Login() {
    // declaração do async storage
    const { clearStorage, createData } = useAsyncStorage()

    // hooks
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    // login
    const LoginTipoUsuario = async (email: string, senha: string) => {
        try {
            const res = await api.post("/api/auth/tipoUsuario", {
                email: email,
                senha: senha
            })

            if(res.status === 200) {
                await clearStorage()
                await createData("@login", res.data)
                router.push("/(dashboard)/home")
            }
        } 
        catch (error) {
            showToast("error", "ERRO", error + "")
            return
        }
    }

    // validação e inserção dos dados
    const LoginHandle = () => {
        try {
            if(email === "" && senha === "") {
                showToast("error", "ERRO", "1")
                return 
            }
 
            if(email === "") {
                showToast("error", "ERRO", "2")
                return 
            }

            if(senha === "") {
                showToast("error", "ERRO", "3")
                return 
            }

            LoginTipoUsuario(email, senha)
        }
        catch (error) {
            showToast("error", "ERRO", error + "" )
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
                                secureTextEntry={true} // mask (checar)
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