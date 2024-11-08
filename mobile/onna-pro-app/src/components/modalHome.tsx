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
                <View className="w-[90%] bg-white pt-12 pb-12 rounded-xl items-center justify-center gap-[18.75px]" >
                    <View className="w-[75%] p-1 flex-row justify-between" >
                        <Text className="text-[25px] text-left color-dark font-Ibold mb-3" >Agendamentos</Text>
                        <Pressable onPress={handleClose} >
                            <MaterialIcons name="close" color={colors.davys} size={30} />
                        </Pressable>
                    </View>

                    <Text className="w-[75%] border-solid border-green-800 border-b-[0.5px] text-[18.75px] text-justify color-black font-Oregular rounded-[12.5px] pl-[1.5625px]">Lorem ipsum dolor sit amet consectur</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
