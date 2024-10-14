import { SafeAreaView, View, StatusBar, Text} from "react-native"

export default function Conversation() {
    return (
        <SafeAreaView className="flex-1 bg-gray" >   
            <View className="w-full h-full justify-center items-center gap-[50px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="" >
                    <Text className="text-[50px] color-green-800 font-Imedium" >Conversation</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}