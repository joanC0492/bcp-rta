import { useUserContext } from "../../store/UserContext";
import { useUsers } from "../hooks";

export const getDNIByCode = (code: string): string => {
  useUsers();
  const { users } = useUserContext();
  const user = users.find((user) => user.uid === code);
  return user?.dni.toString() || "";
};