import React, { useState, useEffect } from "react"
import { SafeAreaView, View, StatusBar, Pressable, Text, Modal } from "react-native"

import { ModalProfile } from "@/components/modalProfile"

import { Avatar } from "@/components/avatar"

import { useAsyncStorage } from "@/hooks/useAsyncStorage"

export default function Profile() {
   // declaração do async storage
   const { readDataByID } = useAsyncStorage()

   // hooks
   const [nome, setNome] = useState<string>("")
   const [dataNasc, setDataNasc] = useState<string>("")
   const [email, setEmail] = useState<string>("")
   const [senha, setSenha] = useState<string>("")
   const [modalVisible, setModalVisible] = useState<boolean>(false) // modal

   useEffect(()=>{
    const Load = async () => {
        // dados do usuário
        const nome = await readDataByID("@login", "nome")
        setNome(nome)

        const dataNasc = await readDataByID("@login", "Data de nascimento")
        setDataNasc(dataNasc)
    
        const email = await readDataByID("@login", "email")
        setEmail(email)

        const senha = await readDataByID("@login", "senha")
        setSenha(senha)
    }

    Load()
}, [])

    const ModalVisibility = () => {
        setModalVisible(true)
    }

    return (
        <SafeAreaView className="flex-1 bg-gray" >   
            <View className="w-full h-full justify-center items-center gap-[18.75px]" >
                <StatusBar barStyle={"dark-content"} />

                    <Avatar source={{ uri: "https://mighty.tools/mockmind-api/content/human/68.jpg" }} size={"large"} />

                    <Pressable className="w-[45%] h-[45px] bg-white justify-center items-center rounded-full shadow-md shadow-black"  >
                        <Text className="text-[15.625px] color-black font-Imedium" >Definir Foto de Perfil</Text>
                    </Pressable>

                    <Text className="w-[90%] text-[25px] text-center color-dark font-Ibold mt-[5px] mb-[5px]" >Minhas Informações</Text>

                    <View className="w-[80%] h-[37.5%] bg-white justify-center items-center gap-[25px] rounded-[18.75px] shadow-md shadow-black" >
                        <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Imedium" >Nome:
                            <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Ilight" numberOfLines={1} lineBreakMode="tail" > {nome}</Text>
                        </Text>
                        <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Imedium" numberOfLines={1} lineBreakMode="tail" >DataNasc:
                            <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Ilight" numberOfLines={1} lineBreakMode="tail" > {dataNasc}</Text>
                        </Text>
                        <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Imedium" numberOfLines={1} lineBreakMode="tail" >Email:
                            <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Ilight" > {email}</Text>
                        </Text>
                        <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Imedium" numberOfLines={1} lineBreakMode="tail" >Área de Formação:
                            <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Ilight" > Medicina</Text>
                        </Text>
                        <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Imedium" numberOfLines={1} lineBreakMode="tail" >Senha:
                            <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Ilight" numberOfLines={1} lineBreakMode="tail" > **********</Text>
                        </Text>
                    </View>

                    <Pressable className="w-[50%] h-[50px] bg-white justify-center items-center rounded-full shadow-md shadow-black" onPress={ModalVisibility} >
                        <Text className="text-[18.75px] color-black font-Imedium" >Alterar Senha</Text>
                    </Pressable>

                    <Modal visible={modalVisible} animationType="fade" transparent={true} > 
                        <ModalProfile handleClose={() => setModalVisible(false)} />
                    </Modal>
            </View>
        </SafeAreaView>
    )
}