import { SafeAreaView, ActivityIndicator } from "react-native"

export function Loading() {
    return (
        <SafeAreaView className="flex-1 bg-green-500" >
            <ActivityIndicator className="w-full h-full bg-white justify-center items-center" />
        </SafeAreaView>
    )
}