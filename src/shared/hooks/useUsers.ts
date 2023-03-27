import { useEffect, useState } from "react";
import { UserService } from "@/app/BcpApp/services";
import { IUser } from "@/app/BcpApp/domain";

export const useUsers = () => {
  const [users, setUsers] = useState([] as IUser[]);
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;
    const getUser = async () => {
      try {
        const data = (await UserService.getUser()) || ([] as IUser[]);
        if (!isCancelled) setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setCompleted(true);
      }
    };
    getUser();
    return () => {
      isCancelled = true;
    };
  }, []);

  return {
    users,
    completed,
  };
};