import { database } from "@/lib/firebase/firebase";
import { update, ref } from "firebase/database";

// ユーザーデータをデータベースに書き込む非同期関数
async function writeUserData(res: string) {
  try {
    await update(ref(database, "user"), {
      userId: res,
    });
  } catch (e) {
    throw new Error("学籍番号の書き込みに失敗しました");
  }
}

// APIルートのハンドラー関数
export async function POST(request: Request) {
  const req = await request.json();
  if (req.uuid == process.env.RASBERRY_UUID) {
    try {
      await writeUserData(req.userId);
      return new Response("OK");
    } catch (e) {
      return new Response("学籍番号の書き込みに失敗しました");
    }
  } else {
    throw new Error("UUIDが一致しません");
  }
}
