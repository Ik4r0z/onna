import { View, Text } from "react-native"

import { colors } from "@/styles/colors"

import { MaterialIcons } from "@expo/vector-icons"

import Toast from "react-native-toast-message"
import { showToast } from "@/components/toast"

import { ArticleDataProps } from "@/utils/articles"

import { useAsyncStorage } from "@/hooks/useAsyncStorage"

import { router } from "expo-router"

type ArticleProps = {
    data: ArticleDataProps
}

export function Article( { data }: ArticleProps ) {
    // async storage
    const { createData, deleteData } = useAsyncStorage()

    // passagem do conteúdo
    const Pass = async (title: string, content: string) => {
        try {
            await deleteData("@article")
            await createData("@article", title)
            await createData("@article", content)
            router.push("/(dashboard)/articles/content")
        } 
        catch (error) {
            showToast("error", "ERRO", "" + error)
            console.error
            return
        }
    }

    // validação e inserção
    const PassHandle = () => {
        try {
            Pass(data.title, data.content)
        }
        catch (error) {
            showToast("error", "ERRO", "" + error)
            console.error
            return
        }
    }

    return (
        <View className="w-full bg-white flex-row rounded-[12.5px] shadow-xl shadow-black gap-4 p-4 mt-7" >
            <View className="flex-1" >
                <View className="flex-row items-center gap-1" >

                    <Text className="flex-1 text-[18.75px] font-Ibold text-green-800" onPress={PassHandle} >{data.title}</Text>

                    <MaterialIcons name="more-horiz" color={colors.green[800]} size={18.75} />
                </View>

                <Text className="text-[12.5px] font-Oregular text-black" numberOfLines={3} lineBreakMode="tail" >{data.content}</Text>
            </View>
            <Toast />
        </View>
    )
}