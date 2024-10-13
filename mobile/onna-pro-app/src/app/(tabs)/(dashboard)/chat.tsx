import { SafeAreaView, View, StatusBar } from "react-native"

export default function Chat() {
    return (
        <SafeAreaView className="flex-1 bg-white" >   
            <View className="w-full h-full justify-center" >
                <StatusBar barStyle={"light-content"} />

            </View>
        </SafeAreaView>
    )
}