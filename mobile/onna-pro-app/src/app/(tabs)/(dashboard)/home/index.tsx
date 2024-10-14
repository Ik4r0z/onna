import React, { useState } from "react"
import { SafeAreaView, View, StatusBar, StyleSheet, Text } from "react-native"

import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"

import { MaterialIcons } from "@expo/vector-icons"

import { Avatar } from "@/components/avatar"

import { Calendar, DateData, LocaleConfig } from "react-native-calendars"

import { ptBR } from "@/utils/localeCalendarConfig"

import { Link } from "expo-router"

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

export default function Home() {
    const [day, setDay] = useState<DateData>()

    return (
        <SafeAreaView className="flex-1 bg-gray" >   
            <View className="w-full h-full justify-center items-center gap-[75px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="w-[90%] h-[50px] bg-white rounded-full flex-row justify-between items-center p-4 shadow-xl shadow-black" >
                    <Text className="text-[18.75px] color-green-800 font-Imedium" >Olá, Dr.
                        <Text className="text-[18.75px] color-green-600 font-Imedium" > Caio Ferreira</Text>
                    </Text>

                    <Avatar source={{ uri: "https://github.com/Ik4r0z.png" }} size={"small"} />
                </View>

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
                        todayTextColor: colors.green[800],
                        selectedDayBackgroundColor: colors.green[500],
                        selectedDayTextColor: colors.black,
                        arrowColor: colors.black,
                        calendarBackground: "transparent",
                        textDayStyle: { color: colors.black },
                        textDisabledColor: colors.green[400],
                        arrowStyle: {
                            margin: 0,
                            padding: 0
                        },
                        textMonthFontFamily: fontFamily.Imedium,
                        textDayFontFamily: fontFamily.Oregular
                    }} 
                    minDate={ new Date().toDateString() }
                    onDayPress={setDay}
                    markedDates={
                        day && {
                            [day.dateString]: { selected: true }
                        }
                    }
                    />
                </View>

                <View className="w-[90%] h-[18.75%] bg-white flex-column justify-center items-center rounded-[25px] gap-4 shadow-black shadow-2xl" >
                    <View className="w-[90%] h-[50px] text-[18.75px] bg-green-800 justify-center items-center rounded-[12.5px]" >
                        <Text className="text-[18.75px] text-center color-white font-Imedium" >{day?.dateString}</Text>
                    </View>
                    <Link href={"/(dashboard)/home/update"} >
                        <Text className="w-[90%] h-[37.5px] text-[18.75px] text-center color-green-600 font-Ibold" >Salvar</Text>
                    </Link>
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