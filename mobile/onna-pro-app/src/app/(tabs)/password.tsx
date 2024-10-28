import React, { useState } from "react"

import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

import Toast from "react-native-toast-message"
import { showToast } from "@/components/toast"

import { useAsyncStorage } from "@/hooks/useAsyncStorage"

import { router } from "expo-router"

export default function Password() {
    // declaração do async storage
    const { createData } = useAsyncStorage()

    // hooks
    const [senha, setSenha] = useState<string>("")
    const [confirmacao, setConfirmacao] = useState<string>("")

    // sign up
    const SignUp = async (senha: string) => {
        try {
            await createData("@signUp", senha)
            router.push("/trainingArea")
        }
        catch (error) {
            showToast("error", "ERRO", error + "")
            return
        }
    }

    // validação e inserção dos dados
    const SignUpHandle = () => {
        try {
            if(senha === "" && confirmacao === "") {
                showToast("error", "ERRO", "1")
                return 
            }
 
            if(senha === "") {
                showToast("error", "ERRO", "2")
                return 
            }

            if(confirmacao === "") {
                showToast("error", "ERRO", "3")
                return 
            }

            if(senha !== confirmacao) {
                showToast("error", "ERRO", "4")
                return 
            }

            SignUp(senha)
        }
        catch (error) {
            showToast("error", "ERRO", error + "")
            return
        }
    }

    return (
        <SafeAreaView className="flex-1 bg-white" >   
            <View className="w-full h-full justify-center gap-[25px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="items-center" >
                    <Image className="w-[250px] h-[297.5px]"
                        source={require("@/assets/images/examining.png")}
                    />
                </View>

                <KeyboardAvoidingView className="flex-1" >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                        <View className="w-full h-full justify-center items-center gap-[18.75px]" >
                            <Text className="w-[75%] text-[25px] text-left color-green-800 font-Ibold" >Definir Senha</Text>

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular mt-[10px]" >Senha</Text>
                            <TextInput className="w-[75%] h-[50px] bg-white border-solid border-green-800 border-[2px] text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px]"
                                placeholder="**********"
                                keyboardType="default"
                                onChangeText={setSenha}
                                value={senha}
                            />

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular" >Confirme a senha</Text>
                            <TextInput className="w-[75%] h-[50px] bg-white border-solid border-green-800 border-[2px] text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px] mb-[10px]"
                                placeholder="**********"
                                keyboardType="visible-password"
                                secureTextEntry={true} // mask (checar)
                                onChangeText={setConfirmacao}
                                value={confirmacao}
                            />

                            <Pressable className="w-[75%] h-[50px] bg-green-800 justify-center items-center rounded-[12.5px] shadow-xl shadow-black" onPress={SignUpHandle} >
                                <Text className="text-[18.75px] color-white font-Imedium" >Salvar</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
            <Toast />
        </SafeAreaView>
    )
}