import React, { useState, useEffect } from "react"

import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

import DropdownComponent from "@/components/dropdown"

import { trainingAreaData, ufData } from "@/utils/data"

import Toast from "react-native-toast-message"
import { showToast } from "@/components/toast"

import { useAsyncStorage } from "@/hooks/useAsyncStorage"

import { Link, router } from "expo-router"

export default function TrainingArea() {
    // declaração do async storage
    const { createData, readData } = useAsyncStorage()

    // hooks
    const [area, setArea] = useState<string>("")
    const [uf, setUf] = useState<string>("")
    const [conselho, setConselho] = useState<string>("")

    // sign up
    const SignUp = async (area: string, uf: string, conselho: string) => {
        try {
            await createData("@signUp", area)
            await createData("@signUp", uf)
            await createData("@signUp", conselho)
            router.push("/spanTime")
        }
        catch (error) {
            showToast("error", "ERRO", error + "")
            return
        }
    }

    // validação e inserção dos dados
    const SignUpHandle = () => {
        try {
            if(area === "" && uf === "" && conselho === "") {
                showToast("error", "ERRO", "1")
                return 
            }
 
            if(area === "") {
                showToast("error", "ERRO", "2")
                return 
            }

            if(uf === "") {
                showToast("error", "ERRO", "3")
                return 
            }

            if(conselho === "") {
                showToast("error", "ERRO", "4")
                return 
            }

            SignUp(area, uf, conselho)
        }
        catch (error) {
            showToast("error", "ERRO", error + "")
            return
        }
    }

    return (
        <SafeAreaView className="flex-1 bg-white" >   
            <View className="w-full h-full justify-center gap-[12.5px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="items-center" >
                    <Image className="w-[250px] h-[297.5px]"
                        source={require("@/assets/images/examining.png")}
                    />
                </View>

                <KeyboardAvoidingView className="flex-1" >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                        <View className="w-full h-full justify-center items-center gap-[6.25px]" >
                            <Text className="w-[75%] text-[25px] text-left color-green-800 font-Ibold" >Área de formação</Text>

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular mt-[10px]" >Área de formação</Text>
                            <DropdownComponent data={trainingAreaData} value={area} onChange={setArea} />

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular" >UF</Text>
                            <DropdownComponent data={ufData} value={uf} onChange={setUf} />

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular" >Nº Conselho Regional</Text>
                            <TextInput className="w-[75%] h-[50px] bg-white border-solid border-green-800 border-[2px] text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px] mb-[10px]"
                                placeholder="....."
                                keyboardType="default"
                                onChangeText={setConselho}
                                value={conselho}
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