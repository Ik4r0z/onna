import { View, StatusBar, Text } from "react-native"

export default function Index() {
    return (
        <View className="flex-1 bg-green-500 justify-center items-center" >
            <StatusBar barStyle={"light-content"} />

            <Text className="text-[22px] color-green-800 font-medium" >Index!</Text>
        </View>
    )
}