import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { IApp } from "@/app/BcpApp/domain";
import { Recompense } from "@/app/BcpApp/services";
import { useUserContext } from "@/store/UserContext";
import { useRecompenseContext } from "@/app/BcpApp/store/context";
import { getDNIByCode, getNameBaseByCode } from "@/app/BcpApp/shared/helpers";

export const useRecompense = () => {
  const { users, isLoading: usersLoading } = useUserContext();
  const { setApp } = useRecompenseContext();
  const [completed, setCompleted] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const codeParam = searchParams.get("code") || "";

  const DNI = getDNIByCode(codeParam);
  const nameBase = getNameBaseByCode(codeParam);

  const setRecompense = async (isCancelled: boolean) => {
    try {
      // console.log("setRecompense", { codeParam, DNI });
      const data =
        (await Recompense.postRecompense(codeParam, DNI, nameBase)) ||
        ({} as IApp);
      if (!isCancelled) {
        setApp(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setCompleted(true);
    }
  };

  useEffect(() => {
    let isCancelled = false;

    //- Si ya tenemos la data y aun asi no hay Recompensas
    //  lo terminamos con "setCompleted(true)"
    if (DNI && nameBase) setRecompense(isCancelled);
    else if (usersLoading === false) setCompleted(true);

    return () => {
      isCancelled = true;
    };
  }, [users]);

  return {
    completed,
  };
};
