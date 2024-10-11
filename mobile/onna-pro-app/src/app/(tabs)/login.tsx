import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

import { Link } from "expo-router"

export default function Login() {
    return (
        <SafeAreaView className="flex-1 bg-green-500" >   
            <View className="w-full h-full justify-center gap-[12.5px]" >
                <StatusBar barStyle={"light-content"} />

                <View className="w-full justify-end items-end" >
                    <Image className="w-[125px] h-[134.5px]"
                        source={require("@/assets/images/leaves.png")}
                    />
                </View>

                <KeyboardAvoidingView className="flex-1" >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                        <View className="w-full h-full bg-white justify-center items-center rounded-t-[50px] gap-[12.5px]" >
                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Oregular mt-[10px]" >Email</Text>
                            <TextInput className="w-[75%] h-[50px] bg-gray text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px]"
                                placeholder="email@example.com"
                                keyboardType="email-address"
                            />

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Oregular" >Senha</Text>
                            <TextInput className="w-[75%] h-[50px] bg-gray text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px] mb-[10px]"
                                placeholder="**********"
                                keyboardType="visible-password"
                            />

                            <Text className="w-[75%] text-[18.75px] color-black font-Oregular mb-[10px]" >Esqueceu Senha?
                                    <Text className="text-[18.75px] color-green-800 font-Oregular" > Clique aqui</Text>
                            </Text>

                            <Pressable className="w-[75%] h-[50px] bg-green-800 justify-center items-center rounded-[12.5px]" >
                                <Text className="text-[18.75px] color-white font-Imedium" >Login</Text>
                            </Pressable>

                            <Text className="w-[75%] text-[18.75px] text-center color-black font-Oregular mb-[10px]" >Ou</Text>

                            <View className="w-[75%] h-[50px] flex-row justify-center items-center gap-[12.5px]" >
                                <Image className="w-[50px] h-[50px]"
                                    source={require("@/assets/images/facebook.png")}
                                />
                                <Image className="w-[50px] h-[50px]"
                                    source={require("@/assets/images/google.png")}
                                />
                                <Image className="w-[50px] h-[50px]"
                                    source={require("@/assets/images/apple.png")}
                                />
                            </View>

                            <Text className="w-[75%] text-[18.75px] text-center color-black font-Oregular" >Não possui cadastro?
                                <Link href={"/signUp"} >
                                    <Text className="text-[18.75px] color-green-800 font-Oregular" > Cadastre-se</Text>
                                </Link>
                            </Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}