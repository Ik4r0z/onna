import { SafeAreaView, View, StatusBar, Text, Image, Pressable } from "react-native"

import { Link } from "expo-router"

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-green-500" >
            <View className="w-full h-full justify-center" >
                <StatusBar barStyle={"light-content"} />

                <View className="items-center mt-[15px]" >
                    <Text className="text-[18px] color-black font-Omedium mb-[3px]" >Bem vindo ao</Text>
                    <Text className="text-[50px] color-green-800 font-Imedium" >ONNA</Text>
                    <Text className="text-[17px] color-black font-Oregular mb-[3px]" >Seu assistente menstrual</Text>
                </View>

                <View className="items-center mt-[20px]" >
                    <Image className="w-[335px] h-[450px] m-[10px]"
                        source={require("@/assets/images/doctor.png")}
                    />
                </View>

                <View className="w-[290px] flex-row self-center justify-between" >
                    <Pressable className="w-[45%] bg-green-800 items-center rounded-[10px] p-[20px] ps-[20px]" >
                        <Link href={"/(tabs)/login"}><Text className="text-[17.5px] color-white font-Imedium" >Login</Text></Link>
                    </Pressable>

                    <Pressable className="w-[45%] border-solid border-green-800 border-[2px] items-center rounded-[10px] p-[20px] ps-[20px]" >
                        <Link href={"/(tabs)/signUp"}><Text className="text-[17.5px] color-green-800 font-Imedium" >Cadastro</Text></Link>
                    </Pressable>
                </View>

                <View className="items-center mt-[30px]" >
                    <Text className="text-[15px] color-green-800 font-Osemibold" >Dúvidas? Veja como funciona</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}