import { useUserContext } from "../../store/UserContext";

export const getDNIByCode = (code: string): string => {
  const { users } = useUserContext();
  const user = users.find((user) => user.uid === code);
  return user?.dni.toString() || "";
};