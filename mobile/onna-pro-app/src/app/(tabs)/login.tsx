import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

export default function Login() {
    return (
        <SafeAreaView className="flex-1 bg-green-500" >
            <View className="w-full h-full justify-center" >
                <StatusBar barStyle={"light-content"} />

                <View className="flex-row items-start justify-end" >
                    <Image className="w-[150px] h-[161px] m-[5px] mb-[50px]"
                        source={require("@/assets/images/leaves.png")}
                    />    
                </View>
                
                <KeyboardAvoidingView className="flex-1" >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                        <View className="w-full h-full bg-white items-center justify-center rounded-t-[50px] mt-[50px]" >
                            <Text className="w-[75%] text-[18px] text-left color-black font-Omedium mt-[10px] mb-[3px]" >Email</Text>
                            <TextInput className="w-[75%] h-[45px] bg-gray color-black text-[18px] text-justify font-Oregular rounded-[10px] mb-[3px] pl-[10px]"
                                placeholder="email@example.com"
                                keyboardType="email-address"
                            />

                            <Text className="w-[75%] text-[18px] text-left color-black font-Omedium mb-[3px]" >Senha</Text>
                            <TextInput className="w-[75%] h-[45px] bg-gray color-black text-[18px] text-justify font-Oregular rounded-[10px] mb-[3px] pl-[10px]"
                                placeholder="**********"
                                keyboardType="visible-password"
                            />

                            <Text className="w-[75%] text-[15px] text-left color-black font-Omedium mb-[3px]" >Esqueceu sua senha? <Text className="w-[75%] text-[15px] text-left color-green-800 font-Omedium mb-[3px]" >Clique aqui</Text></Text>

                            <Pressable className="w-[75%] h-[50px] bg-green-800 items-center justify-center rounded-[10px] mt-[25px] mb-[25px]" >
                                <Text className="text-[20px] color-white font-Imedium" >Login</Text>
                            </Pressable>

                            <Text className="w-[75%] text-[18px] text-center color-black font-Omedium mb-[3px]" >Ou</Text>

                            <View className="w-[75%] h-[15%] flex-row items-center justify-center gap-[15px]" >
                                <Image className="w-[50px] h-[50px] m-[10px]"
                                    source={require("@/assets/images/facebook.png")}
                                />
                                <Image className="w-[50px] h-[50px] m-[10px]"
                                    source={require("@/assets/images/google.png")}
                                />
                                <Image className="w-[50px] h-[50px] m-[10px]"
                                    source={require("@/assets/images/apple.png")}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}