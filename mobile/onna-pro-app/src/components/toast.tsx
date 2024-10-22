import Toast from "react-native-toast-message"

// tipagem do toast
type ToastData = { 
    type: string
    text1: string
    text2: string
}

// configuração do toast
export const showToast = (data: ToastData) => {
    Toast.show({
        type: data.type,
        text1: data.text1,
        text2: data.text2
    });
}