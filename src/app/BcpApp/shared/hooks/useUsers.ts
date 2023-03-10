import { useEffect } from "react";
import { UserService } from "@/app/BcpApp/services";
import { useUserContext } from "@/app/BcpApp/store/UserContext";
import { IUser } from "@/app/BcpApp/domain";

export const useUsers = () => {
  const { handleUsers } = useUserContext();

  useEffect(() => {
    let isCancelled = false;
    const getUser = async () => {
      try {
        const data = (await UserService.getUser()) || ([] as IUser[]);
        if (!isCancelled) handleUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();

    return () => {
      isCancelled = true;
    };
  }, []);
};
