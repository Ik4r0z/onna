import { Tabs } from "expo-router"

import { colors } from "@/styles/colors"

import { MaterialIcons } from "@expo/vector-icons"

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen 
            name="articles" 
            options={{ 
                headerShown: false, 
                title: "",
                tabBarIcon: ({ focused, color, size }) => {
                    if(focused){
                        return <MaterialIcons name="article" color={colors.eerie} size={size} />
                    }
                    return <MaterialIcons name="article" color={colors.green[400]} size={size} />
                }
            }} 
            />
            <Tabs.Screen 
            name="chat" 
            options={{ 
                headerShown: false, 
                title: "",
                tabBarIcon: ({ focused, color, size }) => {
                    if(focused){
                        return <MaterialIcons name="chat" color={colors.eerie} size={size} />
                    }
                    return <MaterialIcons name="chat" color={colors.green[400]} size={size} />
                }
            }} 
            />
            <Tabs.Screen 
            name="home" 
            options={{ 
                headerShown: false, 
                title: "",
                tabBarIcon: ({ focused, color, size }) => {
                    if(focused){
                        return <MaterialIcons name="home" color={colors.eerie} size={size} />
                    }
                    return <MaterialIcons name="home" color={colors.green[400]} size={size} />
                }
            }} 
            />
            <Tabs.Screen 
            name="community" 
            options={{ 
                headerShown: false, 
                title: "",
                tabBarIcon: ({ focused, color, size }) => {
                    if(focused){
                        return <MaterialIcons name="group" color={colors.eerie} size={size} />
                    }
                    return <MaterialIcons name="group" color={colors.green[400]} size={size} />
                }
            }} 
            />
            <Tabs.Screen 
            name="settings" 
            options={{ 
                headerShown: false,
                title: "",
                tabBarIcon: ({ focused, color, size }) => {
                    if(focused){
                        return <MaterialIcons name="settings" color={colors.eerie} size={size} />
                    }
                    return <MaterialIcons name="settings" color={colors.green[400]} size={size} />
                }
            }} 
            />
        </Tabs>
    )
}