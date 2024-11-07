import React, { useState, useEffect } from "react"
import { Stack } from "expo-router"

import { colors } from "@/styles/colors"

import { useAsyncStorage } from "@/hooks/useAsyncStorage" 

export default function ChatLayout() {
    // async storage
    const { readData } = useAsyncStorage()

    // hooks
    const [name, setName] = useState<string>("")

    useEffect(()=>{
        const Load = async () => {
            // nome do usuário selecionado
            const data = await readData("@conversation")
            console.log(data)

            setName(data[0])
        }
        Load()
    }, [])

    return (
        <Stack
            screenOptions={{
                headerTintColor: colors.black,
                headerShadowVisible: false
            }}
        >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="conversation" options={{ title: name, headerStyle: { backgroundColor: colors.white } }} />
        </Stack>
    )
}