import React, { useEffect, useRef, useState } from "react";
import { Keyboard, StatusBar, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import MessageList from "@/components/MessageList";
import CustomKeyboardView from "@/components/CustomKeyboardView";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "@/context/authContext";
import { getRoomId } from "@/utils/common";
import { setDoc, doc, Timestamp, collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../../../../firebaseConfig";

export default function ChatRoom() {
    // hooks
    const item = useLocalSearchParams(); // outro usuário
    const { user } = useAuth(); // usuário logado
    const [messages, setMessages] = useState([]);
    const textRef = useRef("");
    const inputRef = useRef(null);
    const scrollViewRef = useRef(null);

    // Cria a sala e escuta as mensagens
    useEffect(() => {
        if (!user?.userId || !item?.userId) {
            console.log("user or item is missing userId");
            return; // Evita continuar sem dados necessários
        }

        createRoomIfNotExists();

        let roomId = getRoomId(user?.userId, item?.userId);
        const docRef = doc(db, "@rooms", roomId);
        const messagesRef = collection(docRef, "@messages");
        const q = query(messagesRef, orderBy("createdtAt", "asc"));

        let unsub = onSnapshot(q, (snapshot) => {
            let allMessages = snapshot.docs.map(doc => doc.data());
            setMessages(allMessages);
        });

        const KeyboardDidShowListener = Keyboard.addListener("keyboardDidShow", updateScrollView);

        return () => {
            unsub(); // Limpeza do listener
            KeyboardDidShowListener.remove(); // Remover o listener do teclado
        };
    }, [user?.userId, item?.userId]); // Dependência para garantir que o efeito rode quando esses valores mudarem

    useEffect(() => {
        updateScrollView();
    }, [messages]); // Vai garantir que o scroll seja atualizado sempre que as mensagens mudarem

    const updateScrollView = () => {
        setTimeout(() => {
            scrollViewRef?.current?.scrollToEnd({ animated: true });
        }, 100);
    };

    const createRoomIfNotExists = async () => {
        try {
            let roomId = getRoomId(user?.userId, item?.userId);
            await setDoc(doc(db, "@rooms", roomId), {
                roomId,
                createdtAt: Timestamp.fromDate(new Date()),
            });
        } catch (error) {
            console.error("Error creating room:", error);
        }
    };

    const sendMessageHandle = async () => {
        let message = textRef.current.trim();
        if (!message) {
            return;
        }

        try {
            let roomId = getRoomId(user?.userId, item?.userId);
            const docRef = doc(db, "@rooms", roomId);
            const messagesRef = collection(docRef, "@messages");

            textRef.current = "";
            inputRef?.current?.clear();

            const newDoc = await addDoc(messagesRef, {
                userId: user?.userId,
                text: message,
                profileUrl: user?.profileUrl,
                senderName: user?.username,
                createdtAt: Timestamp.fromDate(new Date()),
            });

            console.log("new msg id:", newDoc.id);
        } catch (error) {
            Alert.alert("Error:", error.message);
        }
    };

    return (
        <CustomKeyboardView>
            <View className="flex-1 bg-white">
                <StatusBar barStyle={"dark-content"} />

                <View className="flex-1 justify-between bg-neutral-100 overflow-visible">
                    <View className="flex-1">
                        <MessageList scrollViewRef={scrollViewRef} messages={messages} currentUser={user} />
                    </View>

                    <View className="pt-2 mb-5">
                        <View className="flex-row justify-between bg-white border border-neutral-300 rounded-full p-2 pl-5 mx-3">
                            <TextInput
                                className="flex-1 mr-2 text-xl"
                                ref={inputRef}
                                onChangeText={value => (textRef.current = value)}
                                placeholder="Escreva uma mensagem..."
                            />
                            <TouchableOpacity onPress={sendMessageHandle} className="bg-neutral-200 p-2 mr-[1px] rounded-full">
                                <MaterialIcons name="send" size={20} color={"black"} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </CustomKeyboardView>
    );
}
