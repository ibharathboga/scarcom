import { db, schema, orm } from "@/lib/dbConfig";

export async function createMessage(channelId, userId, message) {
	const [newMessage] = await db
		.insert(schema.messages)
		.values({ channelId, userId, message })
		.returning();

	const participants = await db
		.select({
			userId: schema.users.id,
			username: schema.users.username,
			email: schema.users.email,
		})
		.from(schema.channelParticipants)
		.innerJoin(schema.users, orm.eq(schema.channelParticipants.userId, schema.users.id))
		.where(
			orm.eq(schema.channelParticipants.channelId, channelId)
		);

	const sender = participants.find(p => p.userId === userId);
	const receiver = participants.find(p => p.userId !== userId);

	return {
		newMessage,
		newMessageInfo: {
			senderName: sender.username,
			senderEmail: sender.email,
			receiverName: receiver.username,
			receiverEmail: receiver.email,
		},
	}
}


export async function deleteMessage(messageId) {
	await db.delete(schema.messages).where(orm.eq(schema.messages.id, messageId));
}

export async function getMessages(channelId) {
	return await db
		.select()
		.from(schema.messages)
		.where(orm.eq(schema.messages.channelId, channelId))
		.orderBy(orm.asc(schema.messages.createdAt));
}
