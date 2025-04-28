import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import usePusherChannel from "./usePusherChannel";

export default function useConversations() {
    const session = useSession();
    const [isLoading, setIsLoading] = useState(true);
    const [list, setList] = useState([])

    const { pusherRef } = usePusherChannel('conversations');

    const pingConversations = async () => {
        if (!session.data?.user?.id) return;
        setIsLoading(prev => true)
        const payload = { user_id: session.data.user.id };

        try {
            const response = await fetch("/api/conversations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            console.log(response);
            if (response.ok) {
                const data = await response.json();
                console.log(data.conversations);
                setList(data.conversations);
            } else {
                console.error("Failed to fetch conversations");
            }
        } catch (error) {
            console.error("Error pinging conversations:", error);
        }
        setIsLoading(prev => false)
    };

    const updateConversationsList = (newMessageInfo) => {
        if (!session.data?.user) return;

        const currentUsername = session.data.user.username;
        const { senderName, senderEmail, receiverName, receiverEmail } = newMessageInfo;

        const isCurrentUserInvolved = currentUsername === senderName || currentUsername === receiverName;
        if (!isCurrentUserInvolved) return;

        const friendName = currentUsername === senderName ? receiverName : senderName;
        const friendEmail = currentUsername === senderName ? receiverEmail : senderEmail;

        setList(prevList => {
            let updatedList = prevList.filter(conversation => conversation.username !== friendName);

            const friend = {
                username: friendName,
                email: friendEmail,
                lastMessageTime: new Date(),
            };

            updatedList = [friend, ...updatedList];

            return updatedList;
        });
    };


    useEffect(() => {
        if (session.status === "loading") return;
        pingConversations();
        pusherRef.bind("new_message", updateConversationsList);
    }, [session.status]);

    return {
        isConversationsLoading: isLoading,
        setIsConversationsLoading: setIsLoading,
        conversationsList: list,
    };
}
