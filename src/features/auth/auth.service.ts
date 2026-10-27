
export type AuthStatus = "connected" | "disconnected";

export function getAuthStatus(): AuthStatus {
  return "disconnected";
}
