import React, { useState } from "react"
import { SafeAreaView, View, StatusBar, Text, Switch } from "react-native"

import { MaterialIcons } from "@expo/vector-icons"

export default function Settings() {
    const [ isDarkMode, setIsDarkMode ] = useState(false)
    
    return (
        <SafeAreaView className="flex-1 bg-gray" >   
            <View className="w-full h-full justify-center items-center gap-[50px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="w-[75%] h-[50px] bg-white flex-row justify-center items-center rounded-full shadow-black shadow-xl gap-[12.5px]" >
                    <MaterialIcons name="dark-mode" color={"#4B4B4B"} size={25} />
                    <Text className="text-[18.75px] color-black font-Imedium mr-[50px]" >Modo noturno</Text>
                    <Switch  
                        value={isDarkMode}
                        onValueChange={() => setIsDarkMode((previousState)  => !previousState)}
                        trackColor={{ false: "#DAD7CD", true: "#344E41" }}
                        thumbColor="#344E41"
                    />
                </View>

                <View className="w-[75%] h-[50px] bg-white flex-row justify-center items-center rounded-full shadow-black shadow-xl gap-[12.5px]" >
                    <MaterialIcons name="account-circle" color={"#4B4B4B"} size={25} />
                    <Text className="text-[18.75px] color-black font-Imedium mr-[150px]" >Perfil</Text>
                    <MaterialIcons name="chevron-right" color={"#4B4B4B"} size={25} />
                </View>

                <View className="w-[75%] h-[50px] bg-white flex-row justify-center items-center rounded-full shadow-black shadow-xl gap-[12.5px]" >
                    <MaterialIcons name="notifications" color={"#4B4B4B"} size={25} />
                    <Text className="text-[18.75px] color-black font-Imedium mr-[87.5px]" >Notificações</Text>
                    <MaterialIcons name="chevron-right" color={"#4B4B4B"} size={25} />
                </View>

                <View className="w-[75%] h-[50px] bg-white flex-row justify-center items-center rounded-full shadow-black shadow-xl gap-[12.5px]" >
                    <MaterialIcons name="description" color={"#4B4B4B"} size={25} />
                    <Text className="text-[18.75px] color-black font-Imedium mr-[37.5px]" >Termos de serviço</Text>
                    <MaterialIcons name="chevron-right" color={"#4B4B4B"} size={25} />
                </View>

                <View className="w-[75%] h-[50px] bg-white flex-row justify-center items-center rounded-full shadow-black shadow-xl gap-[12.5px]" >
                    <MaterialIcons name="help" color={"#4B4B4B"} size={25} />
                    <Text className="text-[18.75px] color-black font-Imedium mr-[150px]" >Ajuda</Text>
                    <MaterialIcons name="chevron-right" color={"#4B4B4B"} size={25} />
                </View>
            </View>
        </SafeAreaView>
    )
}