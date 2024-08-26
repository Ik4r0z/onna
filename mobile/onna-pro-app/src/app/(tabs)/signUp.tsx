import { SafeAreaView, View, StatusBar, Image } from "react-native"

export default function SignUp() {
    return (
        <SafeAreaView className="flex-1 bg-white" > 

            <View className="w-full h-[246px] justify-center items-center flex-row border-solid border-black border-[1.5625px]" >
                <Image className="w-[225px] h-[221px]"
                    source={require("../../assets/images/woman.png")}
                />    
            </View>

            <View className="flex-1 justify-center items-center gap-[12.5px]" >
                <StatusBar barStyle={"light-content"} />
            </View>

        </SafeAreaView>
    )
}