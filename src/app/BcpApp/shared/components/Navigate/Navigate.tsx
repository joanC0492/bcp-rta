import { Link } from "react-router-dom";
import cssNav from "@/assets/css/BcpApp/components/Navigate.module.scss";

interface IProps {
  exportPdf: () => void;
  exportImg: () => void;
  elementsRef: {
    mailRef: React.RefObject<HTMLDivElement>;
    imageRef: React.RefObject<HTMLDivElement>;
    refNavigate: React.RefObject<HTMLDivElement>;
  };
}
export const Navigate: React.FC<IProps> = ({
  exportPdf,
  exportImg,
  elementsRef,
}) => {
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