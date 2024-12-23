import { View, FlatList } from "react-native"

import ChatItem from "@/components/ChatItem"

import { useRouter } from "expo-router"

export default function ChatList({ users, currentUser }) {
    // hooks
    const router = useRouter()

    return (
        <View className="flex-1">
            <FlatList
                data={users}
                contentContainerStyle={{ flexGrow: 1, paddingVertical: 25 }}
                keyExtractor={item => Math.random()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <ChatItem item={item} currentUser={currentUser} index={index} router={router} />
                )}
            />
        </View>
    )
}