import { Stack } from "expo-router"

import { colors } from "@/styles/colors"

export default function SettingsLayout() {
    return (
        <Stack
            screenOptions={{
                headerTintColor: colors.black,
                headerShadowVisible: false
            }}
        >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="notifications" options={{ title: "", headerStyle: { backgroundColor: colors.white } }} />
            <Stack.Screen name="profile" options={{ title: "", headerStyle: { backgroundColor: colors.white } }} />
        </Stack>
    )
}