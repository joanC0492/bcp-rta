import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { IApp } from "@/app/BcpApp/domain";
import { Recompense } from "@/app/BcpApp/services";
import { useRecompenseContext } from "@/app/BcpApp/store/context";
import { getDNIByCode, getNameBaseByCode } from "@/app/BcpApp/shared/helpers";

export const useRecompense = () => {
  const { setApp } = useRecompenseContext();
  const [searchParams] = useSearchParams();
  const codeParam = searchParams.get("code") || "";
  const DNI = getDNIByCode(codeParam);
  const nameBase = getNameBaseByCode(codeParam);

  useEffect(() => {
    let isCancelled = false;
    const setRecompense = async () => {
      try {
        console.log({ codeParam, DNI });
        const data =
          (await Recompense.postRecompense(codeParam, DNI, nameBase)) ||
          ({} as IApp);
        if (!isCancelled) setApp(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (DNI && nameBase) {
      setRecompense();
    }

    return () => {
      isCancelled = true;
    };
  }, [DNI, nameBase]);
};