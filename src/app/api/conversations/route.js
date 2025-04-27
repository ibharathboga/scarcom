import { NextResponse } from "next/server";
import { getConversationsByUserId } from "@/lib/db";

export async function POST(req) {
    try {
        const { user_id } = await req.json();

        if (!user_id) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400, ok: false });
        }

        const conversations = await getConversationsByUserId(user_id)

        return NextResponse.json({
            message: "pong",
            user_id: user_id,
            conversations,
        }, { status: 200, statusText: "OK" });

    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 400, ok: false });
    }
}
