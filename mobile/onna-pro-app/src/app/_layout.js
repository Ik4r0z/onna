import React, { useEffect } from "react"
import { Stack, Slot, useRouter, useSegments } from "expo-router"

import { colors } from "@/styles/colors"
import "@/styles/global.css"

import { useFonts, Inter_700Bold, Inter_500Medium, Inter_400Regular, Inter_300Light } from "@expo-google-fonts/inter"
import { OpenSans_700Bold, OpenSans_500Medium, OpenSans_400Regular, OpenSans_300Light } from "@expo-google-fonts/open-sans"

import { Loading } from "@/components/loading"
import { AuthContextProvider, useAuth } from "@/context/authContext"

const LayoutMain = () => {
    const { isAuthenticated } = useAuth()
    const segments = useSegments()
    const router = useRouter()

    useEffect(() => {
        if (typeof isAuthenticated === "undefined") {
            return
        }

        const inApp = segments[0] == "(tabs)"

        if (isAuthenticated && !inApp) {
            router.replace("/(dashboard)/home")
        } else if (isAuthenticated === false) {
            router.replace("/(tabs)/login")
        }
    }, [isAuthenticated])

    return null
}

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

    if (!fontsLoaded) {
        return <Loading />
    }

    return (
        <AuthContextProvider>
            <LayoutMain />
            <Stack
                screenOptions={{
                    headerTintColor: colors.black,
                    headerShadowVisible: false
                }}
            >
                <Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)/login" options={{ title: "", headerStyle: { backgroundColor: colors.green[500] } }} />
                <Stack.Screen name="(tabs)/recoveryPassword" options={{ title: "", headerStyle: { backgroundColor: colors.white } }} />
                <Stack.Screen name="(tabs)/(dashboard)" options={{ headerShown: false }} />
                <Slot />
            </Stack>
        </AuthContextProvider>
    )
}

import { LogBox } from "react-native"

// Ignore warnings específicos relacionados ao Layout
LogBox.ignoreLogs(["Layout children must be of type Screen, all other children are ignored"])