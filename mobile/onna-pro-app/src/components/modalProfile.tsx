import { SafeAreaView, View, Text, TextInput } from "react-native"

export function ModalProfile() {
    return (
        <SafeAreaView className="flex-1 bg-black/50 opacity-1" >
            <View className="w-full h-full items-center justify-center" >
                <View className="w-[75%] h-[25%] bg-white pt-12 pb-12 rounded-[12.5px] items-center justify-center gap-[18.75px]" >
                    <Text className="text-[25px] text-left color-dark font-Ibold" >Nova Senha</Text>
                    <TextInput className="w-[75%] h-[50px] bg-gray text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px] mb-[10px] shadow-lg shadow-black"
                        placeholder=""
                        keyboardType="default"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}