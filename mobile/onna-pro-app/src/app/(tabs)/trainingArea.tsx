import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

import DropdownComponent from "@/components/dropdown"

import { trainingAreaData, ufData } from "@/utils/data"

import { Link } from "expo-router"

export default function TrainingArea() {
    return (
        <SafeAreaView className="flex-1 bg-white" >   
            <View className="w-full h-full justify-center gap-[12.5px]" >
                <StatusBar barStyle={"dark-content"} />

                <View className="items-center" >
                    <Image className="w-[250px] h-[297.5px]"
                        source={require("@/assets/images/examining.png")}
                    />
                </View>

                <KeyboardAvoidingView className="flex-1" >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                        <View className="w-full h-full justify-center items-center gap-[6.25px]" >
                            <Text className="w-[75%] text-[25px] text-left color-green-800 font-Ibold" >Área de formação</Text>

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular mt-[10px]" >Área de formação</Text>
                            <DropdownComponent data={trainingAreaData} />

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular" >UF</Text>
                            <DropdownComponent data={ufData} />

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular" >Nº Conselho Regional</Text>
                            <TextInput className="w-[75%] h-[50px] bg-white border-solid border-green-800 border-[2px] text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px] mb-[10px]"
                                placeholder="....."
                                keyboardType="default"
                            />

                            <Pressable className="w-[75%] h-[50px] bg-green-800 justify-center items-center rounded-[12.5px] shadow-xl shadow-black" >
                                <Link href={"/spanTime"} >
                                    <Text className="text-[18.75px] color-white font-Imedium" >Salvar</Text>
                                </Link>
                            </Pressable>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}