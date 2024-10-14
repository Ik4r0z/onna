import { Stack } from "expo-router"

import { colors } from "@/styles/colors"

import "@/styles/global.css"

import { useFonts, Inter_700Bold, Inter_500Medium, Inter_400Regular, Inter_300Light } from "@expo-google-fonts/inter"
import { OpenSans_700Bold, OpenSans_500Medium, OpenSans_400Regular, OpenSans_300Light } from "@expo-google-fonts/open-sans"

import { Loading } from "@/components/loading"

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_500Medium,
        Inter_400Regular,
        Inter_300Light,
        OpenSans_700Bold,
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
                headerTintColor: colors.black,
                headerShadowVisible: false
            }}
        >
            <Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)/login" options={{ title: "", headerStyle: { backgroundColor: colors.green[500] } }} />
            <Stack.Screen name="(tabs)/signUp" options={{ title: "", headerStyle: { backgroundColor: colors.white } }} />
            <Stack.Screen name="(tabs)/password" options={{ title: "", headerStyle: { backgroundColor: colors.white } }} />
            <Stack.Screen name="(tabs)/recoveryPassword" options={{ title: "", headerStyle: { backgroundColor: colors.white } }} />
            <Stack.Screen name="(tabs)/trainingArea" options={{ title: "", headerStyle: { backgroundColor: colors.white } }} />
            <Stack.Screen name="(tabs)/spanTime" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)/(dashboard)" options={{ headerShown: false }} />
        </Stack>
    )
}