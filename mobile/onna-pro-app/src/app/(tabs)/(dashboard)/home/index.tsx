import React, { useState, useEffect } from "react"
import { SafeAreaView, View, StatusBar, StyleSheet, Text, Modal, Pressable } from "react-native"

import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"

import { Avatar } from "@/components/avatar"

import { ModalHome } from "@/components/modalHome"

import { MaterialIcons } from "@expo/vector-icons"

import { Calendar, DateData, LocaleConfig } from "react-native-calendars"
import { ptBR } from "@/utils/localeCalendarConfig"

import Toast from "react-native-toast-message"
import { showToast } from "@/components/toast"

import { useAsyncStorage } from "@/hooks/useAsyncStorage" 

import { router } from "expo-router"
import { useAuth } from "@/context/authContext"

import { avatarUrl } from "@/utils/avatar"

export default function Home() {
    // idioma do calendário
    LocaleConfig.locales["pt-br"] = ptBR
    LocaleConfig.defaultLocale = "pt-br"

    // async storage
    const { createData, readDataByID, deleteData } = useAsyncStorage()

    // hooks
    const { logout } = useAuth()
    const [day, setDay] = useState<DateData>() // calendário
    const [nome, setNome] = useState<string>("")
    const [avatar, setAvatar] = useState<string>("")
    const [modalVisible, setModalVisible] = useState<boolean>(false) // modal

    // UseEffect sempre que a tela for carregada
    useEffect(() => {
        const Load = async () => {
            // excluir @home
            await deleteData("@home")

            // nome do usuário
            const nome = await readDataByID("@login", "nome")
            setNome(nome)

            // avatar
            const avatar = await readDataByID("@login", "avatar")
            setAvatar(avatar)
        }

        Load()

        // Adicionando dependência vazia para garantir execução na montagem da página
    }, []) 

    // logout
    const logoutHandle = async () => {
        await logout()
    }

    // day
    const Day = async (day: DateData) => {
        try {
            await createData("@home", day)
            router.push("/(dashboard)/home/update")
        }
        catch (error) {
            showToast("error", "ERRO", "" + error)
            console.error(error)
            return
        }
    }

    // validação e inserção
    const DayHandle = () => {
        try {
            if (day === undefined) {
                showToast("error", "ERRO", "Selecione uma data")
                console.error
                return
            }

            Day(day)
        }
        catch (error) {
            showToast("error", "ERRO", "" + error)
            console.error(error)
            return
        }
    }

    const ModalVisibility = () => {
        setModalVisible(true)
    }

    return (
        <SafeAreaView className="flex-1 bg-gray" >   
            <View className="w-full h-full justify-center items-center gap-[21.875px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="w-[90%] h-[55px] bg-white rounded-full flex-row justify-between items-center p-4 shadow-xl shadow-black" >
                    <Text className="text-[18.75px] color-green-800 font-Imedium" >Olá,
                        <Text className="text-[18.75px] color-green-600 font-Imedium" > {nome}</Text>
                    </Text>

                    <Avatar source={{ uri: avatarUrl[String(avatar)] }} size={"small"} />
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

                <View className="w-[90%] h-[25%] bg-white flex-column justify-center items-center rounded-[25px] gap-4 shadow-black shadow-2xl" >  
                    <View className="w-[90%] h-[50px] text-[18.75px] bg-green-800 justify-center items-center rounded-[12.5px]" >
                        <Text className="text-[18.75px] text-center color-white font-Imedium" >{day?.dateString}</Text>
                    </View>
 
                    <Text className="w-[90%] h-[37.5px] text-[18.75px] text-center color-green-600 font-Ibold" onPress={ModalVisibility} >Consultar Agenda</Text>
                    <Text className="w-[90%] h-[37.5px] text-[18.75px] text-center color-green-600 font-Ibold" onPress={DayHandle} >Novo Agendamento</Text>
                </View>

                <Pressable onPress={logoutHandle} >
                    <Text className="w-[90%] h-[37.5px] text-[18.75px] text-center color-green-800 font-Ibold" >Sair</Text>
                </Pressable>
                
                <Modal visible={modalVisible} animationType="fade" transparent={true} > 
                    <ModalHome handleClose={() => setModalVisible(false)} />
                </Modal>
            </View>
            <Toast />
        </SafeAreaView>
    )
}

// estilos
const styles = StyleSheet.create({
    calendar: {
        backgroundColor: "transparent",
        width: "100%",  
        alignSelf: "center"  
    }
})
