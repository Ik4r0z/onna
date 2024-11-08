import React, { useState } from "react"
import { SafeAreaView, View, Text, TextInput, Pressable } from "react-native"

import { colors } from "@/styles/colors"

import { MaterialIcons } from "@expo/vector-icons"

// tipagem do modal
type ModalProfileProps = {
    handleClose: () => void
}

export function ModalProfile({ handleClose }: ModalProfileProps) {
    //hooks
    const [senha, setSenha] = useState<string>("")

    return (
        <SafeAreaView className="flex-1 bg-black/50 opacity-1" >
            <View className="w-full h-full items-center justify-center" >
                <View className="w-[75%] bg-white pt-12 pb-12 rounded-xl items-center justify-center gap-[18.75px]" >
                    <View className="w-[75%] p-1 flex-row justify-between" >
                        <Text className="text-[25px] text-left color-dark font-Ibold mb-3" >Nova Senha</Text>
                        <Pressable onPress={handleClose} >
                            <MaterialIcons name="close" color={colors.davys} size={30} />
                        </Pressable>
                    </View>

                    <TextInput className="w-[75%] h-[50px] bg-gray text-[18.75px] text-justify color-black font-Oregular rounded-[12.5px] pl-[6.25px] mb-[10px] shadow-lg shadow-black"
                        placeholder=""
                        keyboardType="default"
                        onChangeText={setSenha}
                        value={senha}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
