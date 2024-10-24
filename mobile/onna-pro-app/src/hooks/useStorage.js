import AsyncStorage from "@react-native-async-storage/async-storage"

export const useStorage = () => {
    // buscar
    const getItem = async (key) => {
        try {
            const items = await AsyncStorage.getItem(key)
            return JSON.parse(items + "") || []
        }
        catch (error) {
            console.log("ERRO 1: " + error)
            return []
        }
    }

    // salvar
    const saveItem = async (key, value) => {
        try {
            let items = await getItem(key)
            
            items.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(items))
        }
        catch (error) {
            console.log("ERRO 2: " + error)
            return []
        }      
    }

    // remover
    const removeItem = async (key, item) => {
        try {
            let items = await getItem(key)
            
            let myItems = items.filter( (x) => {
                return [x !== item]
            })

            await AsyncStorage.setItem(key, JSON.stringify(myItems))
            return myItems
        }
        catch (error) {
            console.log("ERRO 3: " + error)
            return []
        }
    }

    return {
        getItem,
        saveItem,
        removeItem
    }
}