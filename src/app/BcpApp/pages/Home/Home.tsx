import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecompenseContext } from "@/app/BcpApp/store/context";
import { MailLayout, ViewPdf, ViewImage } from "@/app/BcpApp/shared/components";
import { useRecompense } from "@/app/BcpApp/shared/hooks/useRecompense";
import { useMultimediaContext } from "@/app/BcpApp/store/MultimediaContext";
import "@/assets/css/BcpApp/pages/Home.scss";

export const Home = () => {
  // Carga la data de la pagina en propiedad "app" del Context
  const { completed } = useRecompense();
  const { app } = useRecompenseContext();
  const { showViewImage } = useMultimediaContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (completed && Object.keys(app).length === 0)
      navigate("/lista-de-usuarios");
  }, [completed]);

  return (
    <MailLayout>
      <ViewPdf className={`${showViewImage ? "d-none" : ""}`} />
      <ViewImage className={`${showViewImage ? "" : "d-none"}`} />
    </MailLayout>
  );
};
