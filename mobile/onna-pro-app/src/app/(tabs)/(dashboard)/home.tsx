import React, { useState } from "react"
import { SafeAreaView, View, StatusBar, StyleSheet, Text } from "react-native"

import { Calendar, DateData, LocaleConfig } from "react-native-calendars"

import { MaterialIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"

import { ptBR } from "@/utils/localeCalendarConfig"

import { Avatar } from "@/components/avatar"

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

export default function Home() {
    const [day, setDay] = useState<DateData>()

    return (
        <SafeAreaView className="flex-1 bg-gray" >   
            <View className="w-full h-full justify-center items-center gap-[18.75px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="w-[90%] h-[50px] border-solid border-black border-b-[1px] flex-row justify-between items-center p-2" >
                    <Text className="text-[18.75px] color-green-800 font-Ibold" >Olá, Dr.
                        <Text className="text-[18.75px] color-green-600 font-Ibold" > Caio Ferreira</Text>
                    </Text>

                    <Avatar source={{ uri: "https://github.com/Ik4r0z.png" }} />
                </View>

                <Text className="w-[90%] text-[18.75px] text-left color-green-600 font-Obold p-1" >Disponibilidade</Text>

                <View className="w-[90%] max-h-[50%] bg-white rounded-[25px] gap-[12.5px] shadow-black shadow-2xl" >
                    <Calendar
                    style={styles.calendar}
                    renderArrow={ ( direction: "right" | "left" ) => (
                        <MaterialIcons name={`chevron-${direction}`} color={colors.green[800]} size={18.75} />
                    ) } 
                    headerStyle={{ 
                        paddingBottom: 1,
                        marginBottom: 1    
                    }}
                    theme={{
                        textMonthFontSize: 25,
                        textDayFontSize: 12.5,
                        monthTextColor: colors.green[800],
                        todayTextColor: colors.green[700],
                        selectedDayBackgroundColor: colors.green[500],
                        selectedDayTextColor: colors.black,
                        arrowColor: colors.black,
                        calendarBackground: "transparent",
                        textDayStyle: { color: colors.black },
                        textDisabledColor: "#222222",
                        arrowStyle: {
                            margin: 0,
                            padding: 0
                        },
                        textMonthFontFamily: fontFamily.Imedium,
                        textDayFontFamily: fontFamily.Oregular
                    }} 
                    minDate={ new Date().toDateString() }
                    hideExtraDays
                    onDayPress={setDay}
                    markedDates={
                        day && {
                            [day.dateString]: { selected: true }
                        }
                    }
                    />
                </View>

                <Text className="w-[90%] text-[18.75px] text-left color-green-600 font-Obold p-1" >Horário</Text>

                <View className="w-[90%] h-[25%] bg-green-800 flex-column justify-center items-center rounded-[25px] gap-4 shadow-black shadow-2xl" >
                    <Text className="w-[90%] h-[37.5px] text-[18.75px] text-center bg-[#A8A8A8] opacity-50 color-black rounded-[12.5px] font-Ibold" ></Text>
                    <Text className="w-[90%] h-[37.5px] text-[18.75px] text-center bg-[#A8A8A8] opacity-50 color-black rounded-[12.5px] font-Ibold" ></Text>
                    <Text className="w-[90%] h-[37.5px] text-[18.75px] text-center color-[#A8A8A8] opacity-50 font-Ibold" >Alterar</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    calendar: {
        backgroundColor: "transparent"
    }
})