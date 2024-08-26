import { SafeAreaView, View, StatusBar, Text, Image, Pressable } from "react-native"

import { Link } from "expo-router"

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-green-500" >

            <View className="flex-1 justify-center items-center gap-[12.5px]" >
                <StatusBar barStyle={"light-content"} />

                <Text className="text-[25px] color-black font-regular" >Bem vindo ao</Text>
                <Text className="text-[75px] color-green-800 font-medium" >ONNA</Text>
                <Text className="text-[18.75px] color-black font-regular" >Seu assistente menstrual</Text>

                <Image className="w-[300px] h-[403px]"
                    source={require("../../assets/images/doctor.png")}
                />

                <View className="w-full h-[75px] justify-center items-center flex-row gap-[18.75px]" >
                    <Pressable className="w-[150px] h-[50px] bg-green-800 rounded-[12.5px] justify-center items-center" >
                        <Link href={"/login"}><Text className="text-[18.75px] color-white font-medium" >Login</Text></Link>
                    </Pressable>
                    
                    <Pressable className="w-[150px] h-[50px] border-solid border-green-800 border-[1.5625px] rounded-[12.5px] justify-center items-center" >
                        <Link href={"/signUp"}><Text className="text-[18.75px] color-green-800 font-medium" >Cadastro</Text></Link>
                    </Pressable>
                </View>

                <Text className="text-[12.5px] color-green-800 font-regular" >Dúvidas? Veja como funciona</Text>
            </View>

        </SafeAreaView>
    )
}