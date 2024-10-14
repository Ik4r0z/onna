import React, { useState } from "react"
import { SafeAreaView, View, StatusBar, Text, Switch } from "react-native"

import { colors } from "@/styles/colors"

export default function Notifications() {
    const [ isDesativar, setIsDesativar ] = useState(false)
    const [ isArtigos, setIsArtigos ] = useState(true)
    const [ isNoticias, setIsNoticias ] = useState(false)
    const [ isDisponibilidade, setIsDisponibilidade ] = useState(true)

    return (
        <SafeAreaView className="flex-1 bg-gray" >   
            <View className="w-full h-full justify-center items-center gap-[50px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="w-[75%] h-[75px] bg-white flex-row justify-around items-center rounded-full shadow-black shadow-xl gap-[12.5px]" >
                    <Text className="text-[18.75px] color-black font-Imedium mr-[50px]" >Desativar</Text>
                    <Switch  
                        value={isDesativar}
                        onValueChange={() => setIsDesativar((previousState)  => !previousState)}
                        trackColor={{ false: colors.green[400], true: colors.green[800] }}
                        thumbColor={colors.green[800]}
                    />
                </View>

                <View className="w-[75%] h-[75px] bg-white flex-row justify-around items-center rounded-full shadow-black shadow-xl gap-[12.5px]" >
                    <Text className="text-[18.75px] color-black font-Imedium mr-[75px]" >Artigos</Text>
                    <Switch  
                        value={isArtigos}
                        onValueChange={() => setIsArtigos((previousState)  => !previousState)}
                        trackColor={{ false: colors.green[400], true: colors.green[800] }}
                        thumbColor={colors.green[800]}
                    />
                </View>

                <View className="w-[75%] h-[75px] bg-white flex-row justify-around items-center rounded-full shadow-black shadow-xl gap-[12.5px]" >
                    <Text className="text-[18.75px] color-black font-Imedium mr-[75px]" >Notícias</Text>
                    <Switch  
                        value={isNoticias}
                        onValueChange={() => setIsNoticias((previousState)  => !previousState)}
                        trackColor={{ false: colors.green[400], true: colors.green[800] }}
                        thumbColor={colors.green[800]}
                    />
                </View>

                <View className="w-[75%] h-[75px] bg-white flex-row justify-around items-center rounded-full shadow-black shadow-xl gap-[12.5px]" >
                    <Text className="text-[18.75px] color-black font-Imedium" >Disponibilidade</Text>
                    <Switch  
                        value={isDisponibilidade}
                        onValueChange={() => setIsDisponibilidade((previousState)  => !previousState)}
                        trackColor={{ false: colors.green[400], true: colors.green[800] }}
                        thumbColor={colors.green[800]}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}