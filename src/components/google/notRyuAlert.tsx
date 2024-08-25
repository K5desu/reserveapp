import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function NotRyuAlert(props: { message: string }) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>認証エラー</AlertTitle>
      <AlertDescription>{props.message}</AlertDescription>
    </Alert>
  );
}
