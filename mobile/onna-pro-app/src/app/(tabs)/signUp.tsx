import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

export default function SignUp() {
    return (
        <SafeAreaView className="flex-1 bg-white" >
            <View className="w-full h-full justify-center" >
                <StatusBar barStyle={"light-content"} />

                <View className="items-center" >
                    <Image className="w-[250px] h-[246px]"
                        source={require("@/assets/images/reporting.png")}
                    />
                </View>

                <KeyboardAvoidingView className="flex-1" >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                        <View className="w-full h-full justify-center items-center gap-[16.5px]" >
                            <Text className="w-[75%] text-[24.75px] text-left color-green-800 font-Isemibold mt-[49.5px]" >Cadastro</Text>

                            <Text className="w-[75%] text-[16.5px] text-left color-black font-Oregular" >Nome</Text>
                            <TextInput className="w-[75%] h-[45px] border-solid border-green-800 border-[2px] text-[16.5px] text-justify color-black font-Oregular rounded-[11px] pl-[6px]"
                                placeholder="..."
                                keyboardType="default"
                            />

                            <Text className="w-[75%] text-[16.5px] text-left color-black font-Oregular" >Email</Text>
                            <TextInput className="w-[75%] h-[45px] border-solid border-green-800 border-[2px] text-[16.5px] text-justify color-black font-Oregular rounded-[11px] pl-[6px]"
                                placeholder="email@example.com"
                                keyboardType="email-address"
                            />

                            <Text className="w-[75%] text-[16.5px] color-black font-Oregular" >Já possui cadastro? 
                                <Text className="w-[75%] text-[16.5px] color-green-800 font-Oregular" > Login</Text>
                            </Text>

                            <Pressable className="w-[75%] h-[45px] bg-green-800 justify-center items-center rounded-[11px]" >
                                <Text className="text-[16.5px] color-white font-Imedium" >Continuar</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}