import { SafeAreaView, View, Text, Pressable } from "react-native"

import { colors } from "@/styles/colors"

import { MaterialIcons } from "@expo/vector-icons"

// tipagem do modal
type ModalHomeProps = {
    handleClose: () => void
}

export function ModalHome({ handleClose }: ModalHomeProps) {
    return (
        <SafeAreaView className="flex-1 bg-black/50 opacity-1" >
            <View className="w-full h-full items-center justify-center" >
                <View className="w-[90%] bg-white opacity-3 pt-12 pb-12 rounded-2xl items-center justify-center gap-[18.75px]" >
                    <View className="w-[80%] p-1 flex-row justify-between" >
                        <Text className="text-[25px] text-left color-davys font-Ibold mb-3" >Consulta</Text>
                        <Pressable onPress={handleClose} >
                            <MaterialIcons name="close" color={colors.davys} size={30} />
                        </Pressable>
                    </View>

                    <Text className="w-[80%] h-[200px] bg-gray text-[18.75px] text-justify color-black font-Oregular rounded-xl pl-5 mb-[10px] shadow-lg shadow-black p-5"></Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
