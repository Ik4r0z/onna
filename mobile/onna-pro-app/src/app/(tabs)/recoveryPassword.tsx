import { SafeAreaView, View, StatusBar, Image, Text, Pressable } from "react-native"

import { Link } from "expo-router"

export default function RecoveryPassword() {
    return (
        <SafeAreaView className="flex-1 bg-white" >   
            <View className="w-full h-full justify-center gap-[50px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="items-center" >
                    <Image className="w-[250px] h-[253px]"
                        source={require("@/assets/images/email.png")}
                    />
                </View>

                <View className="justify-center items-center gap-[12.5px]" >
                    <Text className="text-[50px] color-green-800 font-Ibold mt-[10px]" >Atenção</Text>
                    <Text className="w-[75%] text-[25px] text-center color-black font-Iregular" >Enviamos um código para seu email, verifique sua caixa de entrada</Text>

                    <Text className="text-[18.75px] color-black font-Obold mb-[10px]" >01:00</Text>

                    <Pressable className="w-[37.5%] h-[50px] bg-white border-solid border-green-800 border-[2px] justify-center items-center rounded-[12.5px] shadow-xl shadow-black" >
                        <Link href={"/login"} >
                            <Text className="text-[18.75px] color-green-800 font-Imedium" >Login</Text>
                        </Link>
                    </Pressable>

                    <Text className="text-[18.75px] color-black font-Oregular" >Não recebeu?
                        <Text className="text-[18.75px] color-green-800 font-Oregular" > Clique para Reenviar</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}