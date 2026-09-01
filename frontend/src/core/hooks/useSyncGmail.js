import { useState } from "react";
import api from "../api/client";

export function useSyncGmail(onSuccess) {
  const [syncing, setSyncing] = useState(false);
  const sync = async () => {
    setSyncing(true);
    try {
      await api.get("/gmails/sync");
      if (onSuccess) await onSuccess();
    } finally {
      setSyncing(false);
    }
  };
  return { syncing, sync };
}