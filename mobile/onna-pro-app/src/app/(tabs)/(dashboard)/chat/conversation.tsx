import React, { useState, useEffect } from "react"
import { SafeAreaView, View, StatusBar, Text} from "react-native"

import { useAsyncStorage } from "@/hooks/useAsyncStorage"

export default function Conversation() {
    // async storage
    const { createData, readData } = useAsyncStorage()

    // hooks
    const [name, setName] = useState<string>("") 

    useEffect(()=>{
        const Load = async () => {
            // nome do usuário selecionado
            const data = await readData("@message")
            console.log(data)

            setName(data[0])

            await createData("@conversation", data[0])
        }
        Load()
    }, [])


    return (
        <SafeAreaView className="flex-1 bg-gray" >   
            <View className="w-full h-full justify-center items-center gap-[50px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="" >
                    <Text className="text-[50px] color-green-800 font-Imedium" >{name}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}