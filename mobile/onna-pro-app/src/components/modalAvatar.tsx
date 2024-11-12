import React, { useState } from "react"
import { SafeAreaView, View, Text, Pressable, StyleSheet } from "react-native"

import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"

import { TextInputMask } from "react-native-masked-text"

import { MaterialIcons } from "@expo/vector-icons"

// tipagem do modal
type ModalAvatarProps = {
    handleClose: () => void
}

export function ModalAvatar({ handleClose }: ModalAvatarProps) {
    //hooks
    const [avatar, setAvatar] = useState<string>("")

    return (
        <SafeAreaView className="flex-1 bg-black/50 opacity-1" >
            <View className="w-full h-full items-center justify-center" >
                <View className="w-[75%] bg-white opacity-3 pt-12 pb-12 rounded-2xl items-center justify-center gap-[18.75px]" >
                    <View className="w-[75%] p-1 flex-row justify-between" >
                        <Text className="text-[25px] text-left color-davys font-Ibold mb-3" >Novo Avatar</Text>
                        <Pressable onPress={handleClose} >
                            <MaterialIcons name="close" color={colors.davys} size={30} />
                        </Pressable>
                    </View>

                    <TextInputMask style={styles.textInput}
                        type={'only-numbers'}
                        value={avatar}
                        onChangeText={setAvatar}
                    />

                    <Pressable className="w-[50%] h-[50px] bg-davys justify-center items-center rounded-full shadow-md shadow-black" >
                        <Text className="text-[18.75px] color-white font-Imedium" >Salvar</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

// estilos
const styles = StyleSheet.create({
    textInput: {
        width: "75%",
        height: 50,
        backgroundColor: colors.gray,
        fontSize: 18.75,
        textAlign: "justify",
        color: colors.black,
        fontFamily: fontFamily.Oregular,
        borderRadius: 12.5,
        paddingLeft: 6.25,
        marginBottom: 10,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
