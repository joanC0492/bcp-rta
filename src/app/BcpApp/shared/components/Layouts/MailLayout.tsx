import { Loader } from "@/shared/components";
import { useExportMultimedia } from "@/app/BcpApp/shared/hooks";
import { ViewImage, Navigate } from "@/app/BcpApp/shared/components";
import "animate.css";

interface IProps {
  children: React.ReactNode;
}
export const MailLayout: React.FC<IProps> = ({ children }) => {
  const { exportPdf, exportImg, elementsRef, loading, showViewImage } =
    useExportMultimedia();
  return (
    <>
      <Navigate
        exportPdf={exportPdf}
        exportImg={exportImg}
        elementsRef={elementsRef}
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center py-4">
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