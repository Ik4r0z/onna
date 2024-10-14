import { SafeAreaView, View, StatusBar, Text } from "react-native"

export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-white" >   
            <View className="w-full h-full justify-center" >
                <StatusBar barStyle={"dark-content"} />

                <View className="justify-center items-center gap-[1px]" >
                    <Text className="text-[50px] color-green-800 font-Imedium" >Home</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}