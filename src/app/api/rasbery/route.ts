import { database } from "@/lib/firebase/firebase";
import { update, ref } from "firebase/database";

// ユーザーデータをデータベースに書き込む非同期関数
async function writeUserData(res: string) {
  await update(ref(database, "user"), {
    userId: res,
  });
}

// APIルートのハンドラー関数
export async function POST(request: Request) {
  const res = await request.json();
  await writeUserData(res);
  console.log(res);
  return new Response("OK");
}
