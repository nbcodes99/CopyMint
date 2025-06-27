import { getServerSession } from "next-auth";
import { options } from "./options";

export function auth() {
  return getServerSession(options);
}
