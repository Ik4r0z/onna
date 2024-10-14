import { SafeAreaView, View, StatusBar, Text, Image } from "react-native"

export default function Community() {
    return (
        <SafeAreaView className="flex-1 bg-green-500" >   
            <View className="w-full h-full justify-center items-center gap-[50px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="w-[90%] justify-center items-center gap-[1px]" >
                    <Text className="text-[37.5px] text-center color-white font-Ibold" >Bem vindo(a), 
                        <Text className="text-[37.5px] color-green-800 font-Ibold" > a área da comunidade</Text> 
                    </Text>
                </View>

                <View className="" >
                    <Image className="w-[333.3px] h-[358.6px] ml-[50px]"
                        source={require("@/assets/images/mask.png")}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}