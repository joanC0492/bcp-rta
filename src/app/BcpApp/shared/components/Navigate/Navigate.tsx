import { Link } from "react-router-dom";
import cssNav from "@/assets/css/BcpApp/components/Navigate.module.scss";
import { useMultimediaContext } from "@/app/BcpApp/store/MultimediaContext";

export const Navigate: React.FC = () => {
  const { exportPdf, exportImg, elementsRef } = useMultimediaContext();
  return (
    <>
      <div ref={elementsRef.refNavigate} className={cssNav["Navigate"]}>
        <Link to={"lista-de-usuarios"} className="btn btn-outline-primary">
          Lista de usuarios
        </Link>
        <button
          type="button"
          className="btn btn-outline-primary mx-3"
          onClick={exportPdf}>
          Generar PDF
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={exportImg}>
          Generar Imagen
        </button>
      </div>
    </>
  );
};