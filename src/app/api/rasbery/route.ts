import { database } from "@/lib/firebase/firebase";
import { ref, set } from "firebase/database";

// ユーザーデータをデータベースに書き込む非同期関数
async function writeUserData(userId: string) {
  await set(ref(database, "users"), {
    userId: userId,
  });
}

// APIルートのハンドラー関数
export async function POST(request: Request) {
  const res = await request.json();
  await writeUserData(res.userId);

  return Response.json({ res });
}
