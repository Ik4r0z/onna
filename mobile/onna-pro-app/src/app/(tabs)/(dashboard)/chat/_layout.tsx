import { Stack } from "expo-router"

import { colors } from "@/styles/colors"

export default function ChatLayout() {
    return (
        <Stack
            screenOptions={{
                headerTintColor: colors.black,
                headerShadowVisible: false
            }}
        >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="conversation" options={{ title: "", headerStyle: { backgroundColor: colors.white } }} />
        </Stack>
    )
}