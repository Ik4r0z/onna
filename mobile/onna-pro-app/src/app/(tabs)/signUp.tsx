import { SafeAreaView, View, StatusBar, Text } from "react-native"

export default function SignUp() {
    return (
        <SafeAreaView className="flex-1" >
            <View className="w-full h-full bg-white justify-center" >
                <StatusBar barStyle={"light-content"} />

                <View className="items-center mt-[15px]" >
                    <Text className="text-[50px] color-green-800 font-Imedium" >SIGN UP</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}