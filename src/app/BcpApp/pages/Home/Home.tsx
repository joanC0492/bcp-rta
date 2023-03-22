import { MailLayout, ViewPdf, ViewImage } from "@/app/BcpApp/shared/components";
import { useRecompense } from "@/app/BcpApp/shared/hooks/useRecompense";
import { useMultimediaContext } from "@/app/BcpApp/store/MultimediaContext";
import "@/assets/css/BcpApp/pages/Home.scss";

export const Home = () => {
  // Carga la data de la pagina en propiedad "app" del Context
  useRecompense();

  const { showViewImage } = useMultimediaContext();

  return (
    <MailLayout>
      <ViewPdf className={`${showViewImage ? "d-none" : ""}`} />
      <ViewImage className={`${showViewImage ? "" : "d-none"}`} />
    </MailLayout>
  );
};
