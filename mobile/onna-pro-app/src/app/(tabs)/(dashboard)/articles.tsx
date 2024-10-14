import { SafeAreaView, View, StatusBar, Pressable, Text, Image, FlatList } from "react-native"

import { colors } from "@/styles/colors"

import { MaterialIcons } from "@expo/vector-icons"

import { Input } from "@/components/input"
import { Article } from "@/components/article"

import { ARTICLES } from "@/utils/articles"

export default function Articles() {
    return (
        <SafeAreaView className="flex-1 bg-gray" >   
            <View className="w-full h-full justify-center items-center gap-[50px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="flex-1 pt-14 p-4" >
                    <Input>
                        <Pressable>
                            <MaterialIcons name="search" color={colors.davys} size={25} />
                        </Pressable>
                        <Input.Field placeholder="Pesquisar..." />
                    </Input>

                    <FlatList 
                        data={ARTICLES}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Article data={item} />}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}