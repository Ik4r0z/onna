import { SafeAreaView, View, StatusBar, Text, Image, Pressable } from "react-native"

import { Link } from "expo-router"

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-green-500" >   
            <View className="w-full h-full justify-center items-center gap-[50px]" >
                <StatusBar barStyle={"light-content"} />

                <View className="justify-center items-center gap-[1px]" >
                    <Text className="text-[25px] color-black font-Omedium" >Bem vindo ao</Text>
                    <Text className="text-[50px] color-green-800 font-Imedium" >ONNA</Text>
                    <Text className="text-[18.75px] color-black font-Oregular" >Seu assistente menstrual</Text>
                </View>

                <View className="" >
                    <Image className="w-[250px] h-[335.5px]"
                        source={require("@/assets/images/doctor.png")}
                    />
                </View>

                <View className="w-[75%] h-[50px] flex-row justify-around items-center gap-[1px]" >
                    <Pressable className="w-[45%] h-[50px] bg-green-800 justify-center items-center rounded-[12.5px] shadow-xl shadow-black" >
                        <Link href={"/login"} >
                            <Text className="text-[18.75px] color-white font-Imedium" >Login</Text>
                        </Link>
                    </Pressable>

                    <Pressable className="w-[45%] h-[50px] bg-green-500 border-solid border-green-800 border-[2px] justify-center items-center rounded-[12.5px] shadow-xl shadow-black" >
                        <Link href={"/signUp"} >
                            <Text className="text-[18.75px] color-green-800 font-Imedium" >Cadastro</Text>
                        </Link>
                    </Pressable>
                </View>

                <View className="justify-center items-center" >
                    <Text className="text-[18.75px] color-green-800 font-Oregular" >Dúvidas?
                        <Text className="text-[18.75px] color-green-800 font-Oregular" > Veja como funciona</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}