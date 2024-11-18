import React, { useEffect } from "react"
import { SafeAreaView, View, StatusBar, Text, Image } from "react-native"

import Toast from "react-native-toast-message"
import { showToast } from "@/components/toast"

export default function Community() {
    // hooks
    useEffect(() => {
        const Load = async () => {
        }
        
        Load()
    }, [])

    return (
        <SafeAreaView className="flex-1 bg-green-500" >   
            <View className="w-full h-full justify-center items-center gap-[50px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="w-[97%] justify-center items-center gap-[1px] p-[3.125px]" >
                    <Text className="text-[34.375px] text-center color-white font-Ibold" >Bem vindo(a), 
                        <Text className="text-[34.375px] text-center color-green-800 font-Ibold" > a área da comunidade</Text> 
                    </Text>
                </View>

                <View className="" >
                    <Image className="w-[333.3px] h-[358.6px] ml-[37.5px]"
                        source={require("@/assets/images/mask.png")}
                    />
                </View>
            </View>
            <Toast />
        </SafeAreaView>
    )
}