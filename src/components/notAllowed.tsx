export default function NotAllowed() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>アクセスが拒否されました</h1>
      <p>このページにアクセスする権限がありません。</p>
    </div>
  );
}
