import { View, Text } from "react-native"

import { colors } from "@/styles/colors"

import { MaterialIcons } from "@expo/vector-icons"

import { Avatar } from "./avatar"

import Toast from "react-native-toast-message"
import { showToast } from "@/components/toast"

import { MessageDataProps } from "@/utils/messages"

import { router } from "expo-router"

type MessageProps = {
    data: MessageDataProps
}

export function Message( { data }: MessageProps ) {
    // navegação
    function Router() {
        try {
            router.push("/chat/conversation")
        }
        catch (error) {
            const data = { type: "error", text1: "ERRO", text2: "" + error }
            showToast(data)
            return
        }
    }

    // validação
    const RouterHandle = () => {
        try {
            Router()
        }
        catch (error) {
            const data = { type: "error", text1: "ERRO", text2: "" + error }
            showToast(data)
            return
        }
    }

    return (
        <View className="w-full bg-white flex-row rounded-full shadow-black shadow-md gap-4 p-4 mt-7" >
            <Avatar source={{ uri: data.avatar }} />

            <View className="flex-1" >
                <View className="flex-row items-center gap-1" >

                    <Text className="flex-1 text-[18.75px] font-Imedium text-green-800" onPress={RouterHandle} >{data.name}</Text>

                    <Text className="text-[12.5px] font-Ilight text-black" >{data.date}</Text>
                </View>

                <Text className="text-[12.5px] font-Oregular text-black" numberOfLines={1} lineBreakMode="tail" >{data.message}</Text>
            </View>
            
            {data.marker && (
                <MaterialIcons name="circle" color={colors.green[800]} size={18.75} />
            )}
            <Toast />
        </View>
    )
}