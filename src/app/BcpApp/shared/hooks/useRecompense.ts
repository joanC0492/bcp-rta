import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { IApp } from "../../domain";
import { Recompense } from "../../services";
import { useRecompenseContext } from "../../store/context";
import { getDNIByCode } from "../helpers/getDNIByCode";

export const useRecompense = () => {
  const { setApp } = useRecompenseContext();
  const [searchParams] = useSearchParams();
  const codeParam = searchParams.get("code") || "";
  const DNI = getDNIByCode(codeParam);

  useEffect(() => {
    let isCancelled = false;
    const setRecompense = async () => {
      try {
        console.log({ codeParam, DNI });
        const data =
          (await Recompense.postRecompense(codeParam, DNI)) || ({} as IApp);
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
