import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

export default function Password() {
    return (
        <SafeAreaView className="flex-1 bg-white" >
            <View className="w-full h-full justify-center" >
                <StatusBar barStyle={"light-content"} />

                <View className="items-center" >
                    <Image className="w-[200px] h-[238px]"
                        source={require("@/assets/images/examining.png")}
                    />
                </View>

                <KeyboardAvoidingView className="flex-1" >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                        <View className="w-full h-full justify-center items-center gap-[16.5px]" >
                            <Text className="w-[75%] text-[24.75px] text-left color-green-800 font-Isemibold mt-[22px]" >Definir Senha</Text>

                            <Text className="w-[75%] text-[16.5px] text-left color-black font-Oregular" >Senha</Text>
                            <TextInput className="w-[75%] h-[45px] border-solid border-green-800 border-[2px] text-[16.5px] text-justify color-black font-Oregular rounded-[11px] pl-[6px]"
                                placeholder="password"
                                keyboardType="default"
                            />

                            <Text className="w-[75%] text-[16.5px] text-left color-black font-Oregular" >Confirme a senha</Text>
                            <TextInput className="w-[75%] h-[45px] border-solid border-green-800 border-[2px] text-[16.5px] text-justify color-black font-Oregular rounded-[11px] pl-[6px]"
                                placeholder="**********"
                                keyboardType="default"
                            />

                            <Pressable className="w-[75%] h-[45px] bg-green-800 justify-center items-center rounded-[11px]" >
                                <Text className="text-[16.5px] color-white font-Imedium" >Salvar</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}