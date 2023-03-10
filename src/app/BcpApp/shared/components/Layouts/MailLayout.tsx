import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "@/shared/components";
import { ViewImage, Navigate } from "@/app/BcpApp/shared/components";
import "animate.css";
import { useExportMultimedia } from "@/app/BcpApp/shared/hooks";

interface IProps {
  children: React.ReactNode;
}
export const MailLayout: React.FC<IProps> = ({ children }) => {
  const { exportPdf, exportImg, elementsRef, loading, showViewImage } =
    useExportMultimedia();
  // const [showViewImage, setShowViewImage] = useState<boolean>(false);

  return (
    <>
      <div
        style={{ position: "fixed", left: "15px", top: "15px", zIndex: 9 }}
        ref={elementsRef.refNavigate}>
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center py-4">
              {/* <div
                ref={elementsRef.mailRef}
                id="mail"
                className={`mail animate__animated animate__fadeIn animate__fast ${
                  !showViewImage ? "" : "mail--image"
                }`}>
                {!showViewImage ? children : <ViewImage />}
              </div> */}

              <div
                ref={elementsRef.mailRef}
                id="mail"
                className={`mail animate__animated animate__fadeIn animate__fast ${
                  !showViewImage ? "" : "d-none"
                }`}>
                {children}
              </div>

              <div
                ref={elementsRef.imageRef}
                id="image"
                className={`mail mail--image animate__animated animate__fadeIn animate__fast ${
                  !showViewImage ? "d-none" : ""
                }`}>
                <ViewImage />
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
};
