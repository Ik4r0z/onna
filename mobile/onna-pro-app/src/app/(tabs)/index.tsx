import { SafeAreaView, View, StatusBar, Text, Image, Pressable } from "react-native"

import { Link } from "expo-router"

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-green-500" >
            <View className="w-full h-full justify-center items-center gap-[11px]" >
                <StatusBar barStyle={"light-content"} />

                <View className="items-center" >
                    <Text className="text-[22px] color-black font-Omedium" >Bem vindo ao</Text>
                    <Text className="text-[49.5px] color-green-800 font-Imedium" >ONNA</Text>
                    <Text className="text-[16.5px] color-black font-Oregular" >Seu assistente menstrual</Text>
                </View>

                <View className="items-center" >
                    <Image className="w-[285px] h-[383px]"
                        source={require("@/assets/images/doctor.png")}
                    />
                </View>

                <View className="w-[75%] h-[50px] flex-row justify-around items-center" >
                    <Pressable className="w-[45%] h-[45px] bg-green-800 justify-center items-center rounded-[11px]" >
                        <Link href={"/login"} >
                            <Text className="text-[13.75px] color-white font-Imedium" >Login</Text>
                        </Link>
                    </Pressable>

                    <Pressable className="w-[45%] h-[45px] border-solid border-green-800 border-[2px] justify-center items-center rounded-[11px]" >
                        <Link href={"/signUp"} >
                            <Text className="text-[13.75px] color-green-800 font-Imedium" >Cadastro</Text>
                        </Link>
                    </Pressable>
                </View>

                <View className="items-center" >
                    <Text className="text-[16.5px] color-green-800 font-Oregular" >Dúvidas? Veja como funciona</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}