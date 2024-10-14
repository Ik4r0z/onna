import { SafeAreaView, View, StatusBar, Text, TextInput, Pressable } from "react-native"

export default function Update() {
    return (
        <SafeAreaView className="flex-1 bg-gray" >   
            <View className="w-full h-full justify-center items-center gap-[50px]" >
                <StatusBar barStyle={"light-content"} />

                <View className="w-[90%] h-[75%] bg-white justify-center items-center rounded-[25px] gap-[18.75px] shadow-2xl shadow-black" >

                    <TextInput className="w-[75%] h-[50px] border-solid border-green-800 border-b-[0.5px] text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px]"
                        placeholder="Dia e Mês (dd/MM)"
                        keyboardType="default"
                    />

                    <TextInput className="w-[75%] h-[50px] border-solid border-green-800 border-b-[0.5px] text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px]"
                        placeholder="Início (HH:mm)"
                        keyboardType="default"
                    />

                    <TextInput className="w-[75%] h-[50px] border-solid border-green-800 border-b-[0.5px] text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px] mb-[5px]"
                        placeholder="Término (HH:mm)"
                        keyboardType="default"
                    />

                    <Pressable className="w-[50%] h-[50px] bg-green-800 justify-center items-center rounded-full shadow-xl shadow-black" >
                        <Text className="text-[18.75px] color-white font-Imedium" >Salvar</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}