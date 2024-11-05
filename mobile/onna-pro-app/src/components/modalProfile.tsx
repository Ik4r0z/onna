import { SafeAreaView, View, Text, TextInput } from "react-native"

export function ModalProfile() {
    return (
        <SafeAreaView className="flex-1 bg-black/50 opacity-1" >
            <View className="w-full h-full items-center justify-center" >
                <View className="w-[75%] h-[25%] bg-white pt-12 pb-12 rounded-[12.5px] items-center justify-center gap-[12.5px]" >
                    <Text className="text-[25px] text-center color-dark font-Ibold" >Nova Senha</Text>
                    <TextInput className="text-[15.625px] text-left border-solid border-black border-b-[0.5px] color-black font-Ilight" numberOfLines={1} lineBreakMode="tail" 
                        placeholder="..."
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}