import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

export default function SignUp() {
    return (
        <SafeAreaView className="flex-1" >
            <View className="w-full h-full bg-white justify-center" >
                <StatusBar barStyle={"light-content"} />

                <View className="flex-row items-center justify-center" >
                    <Image className="w-[225px] h-[242px] m-[5px] mb-[10px]"
                        source={require("@/assets/images/reporting.png")}
                    />    
                </View>

                <KeyboardAvoidingView className="flex-1" >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                        <View className="w-full h-full bg-white items-center justify-center gap-[5px]" >
                            <Text className="w-[75%] text-[27px] text-left color-green-800 font-Ibold mb-[3px]" >Cadastro</Text>
                            <Text className="w-[75%] text-[18px] text-left color-black font-Omedium mt-[10px] mb-[3px]" >Nome</Text>
                            <TextInput className="w-[75%] h-[45px] bg-white border-solid border-green-800 border-[1px] color-black text-[18px] text-justify font-Oregular rounded-[10px] mb-[6px] pl-[10px]"
                                placeholder="Name"
                                keyboardType="name-phone-pad"
                            />

                            <Text className="w-[75%] text-[18px] text-left color-black font-Omedium mb-[3px]" >Email</Text>
                            <TextInput className="w-[75%] h-[45px] bg-white border-solid border-green-800 border-[1px] color-black text-[18px] text-justify font-Oregular rounded-[10px] mb-[6px] pl-[10px]"
                                placeholder="email@example.com"
                                keyboardType="email-address"
                            />

                            <Text className="w-[75%] text-[15px] text-left color-black font-Omedium mb-[3px]" >Já possui cadastro? <Text className="w-[75%] text-[15px] text-left color-green-800 font-Omedium mb-[3px]" >Login</Text></Text>

                            <Pressable className="w-[75%] h-[50px] bg-green-800 items-center justify-center rounded-[10px] mt-[25px] mb-[25px]" >
                                <Text className="text-[20px] color-white font-Imedium" >Login</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}