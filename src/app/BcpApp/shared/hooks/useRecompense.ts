import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { IApp } from "../../domain";
import { Recompense } from "../../services";
import { useRecompenseContext } from "../../store/context";
import { getDNIByCode } from "../helpers/getDNIByCode";
import { getNameBaseByCode } from "../helpers/getNameBaseByCode";

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

    if (DNI) {
      setRecompense();
    }

    return () => {
      isCancelled = true;
    };
  }, [DNI]);
};
