import { SafeAreaView, View, StatusBar, Text, Image } from "react-native"

export default function SpanTime() {
    return (
        <SafeAreaView className="flex-1 bg-green-500" >   
            <View className="w-full h-full justify-center items-center gap-[50px]" >
                <StatusBar barStyle={"light-content"} />

                <View className="w-[90%] justify-center items-center gap-[1px] p-[3.125px]" >
                    <Text className="text-[50px] text-center color-green-800 font-Ibold" >Organize seus horários com o
                        <Text className="text-[50px] color-white font-Ibold" > ONNA</Text> 
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