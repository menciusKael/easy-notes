import Redis, { Callback } from "ioredis";

const redis = new Redis();

const initialData = {
  "1702459181837":
    '{"title":"one","content":"first react diff","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459182837":
    '{"title":"two","content":"second components lifecycle","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459188837":
    '{"title":"three","content":"third the based render","updateTime":"2023-12-13T09:19:48.837Z"}',
};

export async function getAllNotes() {
  const data = await redis.hgetall("notes");
  if (Object.keys(data).length == 0) {
    await redis.hset("notes", initialData);
  }
  return await redis.hgetall("notes");
}

export async function addNote(data: Callback<number> | undefined) {
  const uuid = Date.now().toString();
  await redis.hset("notes", [uuid], data);
  return uuid;
}

export async function updateNote(
  uuid: any,
  data: Callback<number> | undefined
) {
  await redis.hset("notes", [uuid], data);
}

export async function getNote(uuid: string | Buffer) {
  const data = (await redis.hget("notes", uuid)) || "";
  return JSON.parse(data);
}

export async function delNote(uuid: string | Buffer) {
  return redis.hdel("notes", uuid);
}

export default redis;
