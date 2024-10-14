import { SafeAreaView, View, StatusBar, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, Pressable } from "react-native"

import DropdownComponent from "@/components/dropdown"

import { Link } from "expo-router"

export default function TrainingArea() {
    const trainingAreaData = [
        { label: 'Medicina', value: 'Medicina' },
        { label: 'Psicologia', value: 'Psicologia' }
    ];

    const ufData = [
        { label: 'Acre (AC)', value: 'AC' },
        { label: 'Alagoas (AL)', value: 'AL' },
        { label: 'Amapá (AP)', value: 'AP' },
        { label: 'Amazonas (AM)', value: 'AM' },
        { label: 'Bahia (BA)', value: 'BA' },
        { label: 'Ceará (CE)', value: 'CE' },
        { label: 'Distrito Federal (DF)', value: 'DF' },
        { label: 'Espírito Santo (ES)', value: 'ES' },
        { label: 'Goiás (GO)', value: 'GO' },
        { label: 'Maranhão (MA)', value: 'MA' },
        { label: 'Mato Grosso (MT)', value: 'MT' },
        { label: 'Mato Grosso do Sul (MS)', value: 'MS' },
        { label: 'Minas Gerais (MG)', value: 'MG' },
        { label: 'Pará (PA)', value: 'PA' },
        { label: 'Paraíba (PB)', value: 'PB' },
        { label: 'Paraná (PR)', value: 'PR' },
        { label: 'Pernambuco (PE)', value: 'PE' },
        { label: 'Piauí (PI)', value: 'PI' },
        { label: 'Rio de Janeiro (RJ)', value: 'RJ' },
        { label: 'Rio Grande do Norte (RN)', value: 'RN' },
        { label: 'Rio Grande do Sul (RS)', value: 'RS' },
        { label: 'Rondônia (RO)', value: 'RO' },
        { label: 'Roraima (RR)', value: 'RR' },
        { label: 'Santa Catarina (SC)', value: 'SC' },
        { label: 'São Paulo (SP)', value: 'SP' },
        { label: 'Sergipe (SE)', value: 'SE' },
        { label: 'Tocantins (TO)', value: 'TO' }
    ];
    

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
                        <View className="w-full h-full justify-center items-center gap-[12.5px]" >
                            <Text className="w-[75%] text-[25px] text-left color-green-800 font-Ibold" >Área de formação</Text>

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular mt-[10px]" >Área de formação</Text>
                            <DropdownComponent data={trainingAreaData} />

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular" >UF</Text>
                            <DropdownComponent data={ufData} />

                            <Text className="w-[75%] text-[18.75px] text-left color-black font-Iregular" >Nº Conselho Regional</Text>
                            <TextInput className="w-[75%] h-[50px] border-solid border-green-800 border-[2px] text-[18.75px] text-justify color-black font-Olight rounded-[12.5px] pl-[6.25px] mb-[10px]"
                                placeholder=""
                                keyboardType="default"
                            />

                            <Pressable className="w-[75%] h-[50px] bg-green-800 justify-center items-center rounded-[12.5px]" >
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