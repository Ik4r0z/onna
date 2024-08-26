import { SafeAreaView, View, StatusBar, Image } from "react-native"

export default function Login() {
    return (
        <SafeAreaView className="flex-1 bg-green-500" >

            <View className="w-full h-[186px] justify-end items-start flex-row border-solid border-black border-[1.5625px]" >
                <Image className="w-[150px] h-[161px]"
                    source={require("../../assets/images/leaves.png")}
                />    
            </View>

            <View className="flex-1 justify-center items-center gap-[12.5px]" >
                <StatusBar barStyle={"light-content"} />
            </View>

        </SafeAreaView>
    )
}