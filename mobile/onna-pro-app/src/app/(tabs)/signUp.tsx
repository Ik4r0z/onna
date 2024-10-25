import React, { useState } from "react"

import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

import Toast from "react-native-toast-message"
import { showToast } from "@/components/toast"

import { useAsyncStorage } from "@/hooks/useAsyncStorage"

import { Link, router } from "expo-router"

export default function SignUp() {
    // declaração do async storage
    const { createData } = useAsyncStorage()

    // hooks
    const [nome, setNome] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    // sign up
    const SignUp = async (nome: string, email: string) => {
        try {
            await createData("@signUp", nome)
            await createData("@signUp", email)
            router.push("/password")
        }
        catch (error) {
            showToast("error", "ERRO", error + "")
            return
        }
    }

    // validação e inserção dos dados
    const SignUpHandle = () => {
        try {
            if(nome === "" && email === "") {
                showToast("error", "ERRO", "1")
                return 
            }
 
            if(nome === "") {
                showToast("error", "ERRO", "2")
                return 
            }

            if(email === "") {
                showToast("error", "ERRO", "3")
                return 
            }

            SignUp(nome, email)
        }
        catch (error) {
            showToast("error", "ERRO", error + "")
            return
        }
    }

    return (
        <SafeAreaView className="flex-1 bg-white" >   
            <View className="w-full h-full justify-center gap-[50px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="items-center" >
                    <Image className="w-[250px] h-[246px]"
                        source={require("@/assets/images/reporting.png")}
                    />
                </View>

                <KeyboardAvoidingView className="flex-1" >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} > 
                        <View className="w-full h-full justify-center items-center gap-[12.5px]" >
                            <Text className="w-[75%] text-[25px] text-left color-green-800 font-Ibold" >Cadastro</Text>

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular mt-[10px]" >Nome</Text>
                            <TextInput className="w-[75%] h-[50px] bg-white border-solid border-green-800 border-[2px] text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px]"
                                placeholder=".........."
                                keyboardType="default"
                                onChangeText={setNome}
                                value={nome}
                            />

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular" >Email</Text>
                            <TextInput className="w-[75%] h-[50px] bg-white border-solid border-green-800 border-[2px] text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px]"
                                placeholder="email@example.com"
                                keyboardType="email-address"
                                onChangeText={setEmail}
                                value={email}
                            />

                            <Text className="w-[75%] text-[18.75px] color-black font-Iregular mb-[10px]" >Já possui cadastro?
                                <Link href={"/login"} >
                                    <Text className="text-[18.75px] color-green-800 font-Iregular" > Login</Text>
                                </Link>
                            </Text>

                            <Pressable className="w-[75%] h-[50px] bg-green-800 justify-center items-center rounded-[12.5px] shadow-xl shadow-black" onPress={SignUpHandle} >
                                <Text className="text-[18.75px] color-white font-Imedium" >Continuar</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
            <Toast />
        </SafeAreaView>
    )
}