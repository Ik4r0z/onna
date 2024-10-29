import React, { useState, useEffect } from "react"
import { SafeAreaView, View, StatusBar, Pressable, Text} from "react-native"

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

    return (
        <SafeAreaView className="flex-1 bg-gray" >   
            <View className="w-full h-full justify-center items-center gap-[12.5px]" >
                <StatusBar barStyle={"dark-content"} />

                    <Avatar source={{ uri: "https://github.com/Ik4r0z.png" }} size={"large"} />

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
                            <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Ilight" numberOfLines={1} lineBreakMode="tail" > {senha}</Text>
                        </Text>
                    </View>

                    <Text className="w-[90%] text-[15.625px] text-center color-black font-Oregular" >Deseja alterar sua senha?
                        <Text className="text-[15.625px] color-dark font-regular" > Clique aqui</Text>
                    </Text>

                    <Pressable className="w-[50%] h-[50px] bg-white justify-center items-center rounded-full shadow-md shadow-black"  >
                        <Text className="text-[18.75px] color-black font-Imedium" >Alterar Dados</Text>
                    </Pressable>
            </View>
        </SafeAreaView>
    )
}