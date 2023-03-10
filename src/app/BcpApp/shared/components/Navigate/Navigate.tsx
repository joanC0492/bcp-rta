import { Link } from "react-router-dom";
import { useExportMultimedia } from "@/app/BcpApp/shared/hooks";

export const Navigate = () => {
  const { exportPdf, exportImg, elementsRef } = useExportMultimedia();

  return (
    <>
      <div style={{ position: "fixed", left: "15px", top: "15px", zIndex: 9 }}>
        <Link
          // ref={elementsRef.listRef}
          to={"lista-de-usuarios"}
          className="btn btn-outline-primary">
          Lista de usuarios
        </Link>
        <button
          // ref={elementsRef.pdfRef}
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
