import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

export default function Login() {
    return (
        <SafeAreaView className="flex-1 bg-green-500" >
            <View className="w-full h-full justify-center gap-[11px]" >
                <StatusBar barStyle={"light-content"} />

                <View className="w-[95%] h-[25%] flex-row justify-end items-start" >
                    <Image className="w-[125px] h-[134px]"
                        source={require("@/assets/images/leaves.png")}
                    />
                </View>

                <KeyboardAvoidingView className="flex-1" >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                        <View className="w-full h-full bg-white justify-center items-center rounded-t-[49.5px] gap-[16.5px]" >
                            <Text className="w-[75%] text-[16.5px] text-left color-black font-Oregular mt-[49.5px]" >Email</Text>
                            <TextInput className="w-[75%] h-[45px] bg-gray text-[16.5px] text-justify color-black font-Oregular rounded-[11px] pl-[6px]"
                                placeholder="email@example.com"
                                keyboardType="email-address"
                            />

                            <Text className="w-[75%] text-[16.5px] text-left color-black font-Oregular" >Senha</Text>
                            <TextInput className="w-[75%] h-[45px] bg-gray text-[16.5px] text-justify color-black font-Oregular rounded-[11px] pl-[6px]"
                                placeholder="**********"
                                keyboardType="default"
                            />

                            <Text className="w-[75%] text-[16.5px] color-black font-Oregular" >Esqueceu sua senha? 
                                <Text className="w-[75%] text-[16.5px] color-green-800 font-Oregular" > Clique aqui</Text>
                            </Text>

                            <Pressable className="w-[75%] h-[45px] bg-green-800 justify-center items-center rounded-[11px]" >
                                <Text className="text-[16.5px] color-white font-Imedium" >Login</Text>
                            </Pressable>

                            <Text className="w-[75%] text-center text-[16.5px] color-black font-Oregular" >Ou</Text>

                            <View className="w-[75%] h-[50px] flex-row justify-center items-center gap-[11px]" >
                                <Image className="w-[45px] h-[45px]"
                                    source={require("@/assets/images/facebook.png")}
                                />
                                <Image className="w-[45px] h-[45px]"
                                    source={require("@/assets/images/google.png")}
                                />
                                <Image className="w-[45px] h-[45px]"
                                    source={require("@/assets/images/apple.png")}
                                />
                            </View>

                            <Text className="w-[75%] text-center text-[16.5px] color-black font-Oregular" >Não possui cadastro? 
                                <Text className="w-[75%] text-center text-[16.5px] color-green-800 font-Oregular" > Cadastre-se</Text>
                            </Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}