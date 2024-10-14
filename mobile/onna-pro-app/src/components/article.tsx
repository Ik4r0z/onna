import { View, Text } from "react-native"

import { colors } from "@/styles/colors"

import { MaterialIcons } from "@expo/vector-icons"

import { ArticleDataProps } from "@/utils/articles"

type ArticleProps = {
    data: ArticleDataProps
}

export function Article( { data }: ArticleProps ) {
    return (
        <View className="w-full bg-white flex-row rounded-[12.5px] shadow-2xl shadow-black gap-4 p-4 mt-7" >
            <View className="flex-1" >
                <View className="flex-row items-center gap-1" >

                    <Text className="flex-1 text-[18.75px] font-Ibold text-green-800" >{data.title}</Text>

                    <MaterialIcons name="more-horiz" color={colors.green[800]} size={18.75} />
                </View>

                <Text className="text-[12.5px] font-Oregular text-black" numberOfLines={3} lineBreakMode="tail" >{data.content}</Text>
            </View>
        </View>
    )
}