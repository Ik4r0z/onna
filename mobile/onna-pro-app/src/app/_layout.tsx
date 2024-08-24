import { Slot } from "expo-router"

import "../styles/global.css"

import { useFonts, YanoneKaffeesatz_500Medium, YanoneKaffeesatz_300Light } from "@expo-google-fonts/yanone-kaffeesatz"
import { OpenSans_600SemiBold, OpenSans_400Regular } from "@expo-google-fonts/open-sans"

import { Loading } from "@/components/loading"

export default function Layout() {
    const [fontsLoaded] = useFonts({
        OpenSans_600SemiBold,
        YanoneKaffeesatz_500Medium,
        OpenSans_400Regular,
        YanoneKaffeesatz_300Light
    })

    if(!fontsLoaded){
        return <Loading />
    }

    return (
        <Slot />
    )
}