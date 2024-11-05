import React, { useState, useEffect } from "react"
import { SafeAreaView, View, StatusBar, ScrollView, Text} from "react-native"

import { useAsyncStorage } from "@/hooks/useAsyncStorage" 

export default function Content() {
    // async storage
    const { readData } = useAsyncStorage()

    // hooks
    const [title, setTitle] = useState<string>("") 
    const [content, setContent] = useState<string>("")

    useEffect(()=>{
        const Load = async () => {
            // artigo selecionado
            const data = await readData("@article")
            console.log(data)

            setTitle(data[0])
            setContent(data[1])
        }
        Load()
    }, [])

    return (
        <SafeAreaView className="flex-1 bg-gray" >   
            <View className="w-full h-full justify-center items-center gap-[25px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="w-[90%] gap-[37.5px]" >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                        <Text className="text-[37.5px] text-left font-Ibold text-green-800 gap-[25px] border-solid border-black border-b-[1px]" >{title}</Text>
                        <Text className="text-[18.75px] text-justify font-Oregular text-black mt-5" >{content}</Text>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}