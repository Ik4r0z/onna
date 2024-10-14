import { Tabs } from "expo-router"

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
                        return <MaterialIcons name="article" color={"#222222"} size={size} />
                    }
                    return <MaterialIcons name="article" color={"#DAD7CD"} size={size} />
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
                        return <MaterialIcons name="chat" color={"#222222"} size={size} />
                    }
                    return <MaterialIcons name="chat" color={"#DAD7CD"} size={size} />
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
                        return <MaterialIcons name="home" color={"#222222"} size={size} />
                    }
                    return <MaterialIcons name="home" color={"#DAD7CD"} size={size} />
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
                        return <MaterialIcons name="group" color={"#222222"} size={size} />
                    }
                    return <MaterialIcons name="group" color={"#DAD7CD"} size={size} />
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
                        return <MaterialIcons name="settings" color={"#222222"} size={size} />
                    }
                    return <MaterialIcons name="settings" color={"#DAD7CD"} size={size} />
                }
            }} 
            />
        </Tabs>
    )
}