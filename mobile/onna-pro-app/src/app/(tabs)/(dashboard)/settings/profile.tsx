import { SafeAreaView, View, StatusBar, Pressable, Text} from "react-native"

import { Avatar } from "@/components/avatar"

export default function Profile() {
    return (
        <SafeAreaView className="flex-1 bg-gray" >   
            <View className="w-full h-full justify-center items-center gap-[9.375px]" >
                <StatusBar barStyle={"dark-content"} />

                    <Avatar source={{ uri: "https://github.com/Ik4r0z.png" }} size={"large"} />

                    <Pressable className="w-[37.5%] h-[50px] bg-white justify-center items-center rounded-full shadow-xl shadow-black"  >
                        <Text className="text-[12.5px] color-black font-Imedium" >Definir Foto de Perfil</Text>
                    </Pressable>

                    <Text className="w-[90%] text-[25px] text-center color-dark font-Ibold mt-[10px] mb-[10px]" >Minhas Informações</Text>

                    <View className="w-[75%] h-[37.5%] bg-white justify-center items-center gap-[25px] rounded-[25px] shadow-xl shadow-black" >
                        <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Imedium" >Nome:
                            <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Ilight" numberOfLines={1} lineBreakMode="tail" > Caio Ferreira</Text>
                        </Text>
                        <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Imedium" numberOfLines={1} lineBreakMode="tail" >DataNasc:
                            <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Ilight" numberOfLines={1} lineBreakMode="tail" > 27/10/2006</Text>
                        </Text>
                        <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Imedium" numberOfLines={1} lineBreakMode="tail" >Email:
                            <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Ilight" > caiodumontfer@gmail.com</Text>
                        </Text>
                        <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Imedium" numberOfLines={1} lineBreakMode="tail" >Área de Formação:
                            <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Ilight" > Medicina</Text>
                        </Text>
                        <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Imedium" numberOfLines={1} lineBreakMode="tail" >Senha:
                            <Text className="w-[75%] text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Ilight" numberOfLines={1} lineBreakMode="tail" > **********</Text>
                        </Text>
                    </View>

                    <Pressable className="w-[50%] h-[50px] bg-white justify-center items-center rounded-full shadow-xl shadow-black"  >
                        <Text className="text-[18.75px] color-black font-Imedium" >Alterar Dados</Text>
                    </Pressable>

                    <Text className="w-[90%] text-[15.625px] text-center color-black font-Oregular" >Deseja alterar sua senha?
                        <Text className="text-[15.625px] color-dark font-regular" > Clique aqui</Text>
                    </Text>
            </View>
        </SafeAreaView>
    )
}