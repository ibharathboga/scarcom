import { db, schema, orm } from "@/lib/dbConfig";

export async function getUserByEmail(email) {
	const iusers = await db
		.select()
		.from(schema.users)
		.where(orm.eq(schema.users.email, email));
	const [user] = iusers;
	return user;
}

export async function addUser(credentials) {
	await db.insert(schema.users).values(credentials);
}

export async function searchUser(query) {
	const iusers = await db
		.select({
			username: schema.users.username,
			email: schema.users.email,
		})
		.from(schema.users)
		.where(
			orm.or(
				orm.like(schema.users.username, `%${query}%`),
				orm.like(schema.users.email, `%${query}%`)
			)
		);

	return iusers;
}

export async function getUserByUsername(username) {
	const iusers = await db
		.select()
		.from(schema.users)
		.where(orm.eq(schema.users.username, username));
	const [user] = iusers;
	return user;
}

export async function getConversationsByUserId(userId) {
	const conversations = await db
		.select({
			userId: schema.users.id,
			username: schema.users.username,
			lastMessageAt: orm.max(schema.messages.createdAt).as("lastMessageAt"),
		})
		.from(schema.messages)
		.innerJoin(schema.users, orm.eq(schema.users.id, schema.messages.userId))
		.where(orm.not(orm.eq(schema.messages.userId, userId)))
		.groupBy(schema.users.id, schema.users.username)
		.orderBy(orm.desc(orm.max(schema.messages.createdAt)));

	return conversations;
}