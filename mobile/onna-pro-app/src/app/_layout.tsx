import { Stack } from "expo-router"

import "../styles/global.css"

import { useFonts, Inter_700Bold, Inter_600SemiBold, Inter_500Medium, Inter_400Regular, Inter_300Light } from "@expo-google-fonts/inter"
import { OpenSans_700Bold, OpenSans_600SemiBold, OpenSans_500Medium, OpenSans_400Regular, OpenSans_300Light } from "@expo-google-fonts/open-sans"

import { Loading } from "@/components/loading"

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_600SemiBold,
        Inter_500Medium,
        Inter_400Regular,
        Inter_300Light,
        OpenSans_700Bold,
        OpenSans_600SemiBold,
        OpenSans_500Medium,
        OpenSans_400Regular,
        OpenSans_300Light
    })

    if(!fontsLoaded){
        return <Loading />
    }
    return (
        <Stack
            screenOptions={{
                headerTintColor: "#000000",
                headerShadowVisible: false
            }}
        >
            <Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)/login" options={{ title: "", headerStyle: { backgroundColor: "#A3B18A" } }} />
            <Stack.Screen name="(tabs)/signUp" options={{ title: "", headerStyle: { backgroundColor: "#FFFFFF" } }} />
        </Stack>
    )
}