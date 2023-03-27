import { Link } from "react-router-dom";
import cssNav from "@/assets/css/BcpApp/components/Navigate.module.scss";
import { useMultimediaContext } from "@/app/BcpApp/store/MultimediaContext";
import { data } from "@/app/BcpApp/data/bcpRecompensaData";

export const Navigate: React.FC = () => {
  const { exportPdf, exportImg, elementsRef } = useMultimediaContext();
  return (
    <>
      <div ref={elementsRef.refNavigate} className={cssNav["Navigate"]}>
        <Link to={"lista-de-usuarios"} className="btn btn-outline-primary">
          {data.navigate.btnList}
        </Link>
        <button
          type="button"
          className="btn btn-outline-primary mx-3"
          onClick={() => exportPdf()}>
          {data.navigate.btnPdf}
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={exportImg}>
          {data.navigate.btnImage}
        </button>
      </div>
    </>
  );
};
