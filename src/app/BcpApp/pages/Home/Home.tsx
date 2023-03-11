import {
  Body,
  Footer,
  Header,
  MailLayout,
} from "@/app/BcpApp/shared/components";
import { useRecompense } from "../../shared/hooks/useRecompense";
import "@/assets/css/BcpApp/pages/Home.scss";

export const Home = () => {
  useRecompense();
  return (
    <MailLayout>
      <Header />
      <Body />
      <Footer />
    </MailLayout>
  );
};
