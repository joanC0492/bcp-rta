import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Body,
  Footer,
  Header,
  MailLayout,
} from "@/app/BcpApp/shared/components";
import { getUrlProd } from "@/shared/helpers";
import { Recompense } from "@/app/BcpApp/services";
import { IApp } from "@/app/BcpApp/domain";
import { useRecompenseContext } from "@/app/BcpApp/store/context";
import "@/assets/css/BcpApp/pages/Home.scss";

const srcImages: string = getUrlProd + "/images/mail";

export const Home = () => {
  const { setApp } = useRecompenseContext();
  const [searchParams] = useSearchParams();
  const codeParam = searchParams.get("code") || "";

  useEffect(() => {
    let isCancelled = false;
    const setRecompense = async () => {
      try {
        const data =
          (await Recompense.postRecompense(codeParam)) || ({} as IApp);
        if (!isCancelled) setApp(data);
      } catch (error) {
        console.log(error);
      }
    };
    setRecompense();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <MailLayout>
      <Header src={srcImages} />
      <Body />
      <Footer src={srcImages} />
    </MailLayout>
  );
};