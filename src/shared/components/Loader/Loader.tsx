import ReactDOM from "react-dom";
import { getUrlProd } from "@/shared/helpers";
import "./Loader.scss";

interface IProps {
  children?: React.ReactNode;
}
export const Loader: React.FC<IProps> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="loader-portal">
      {children ? (
        children
      ) : (
        <div className="loader-container">
          
          <div className="loader-wrapper">
            <figure className="loader-hydrated">
              <img
                alt="BCP"
                height="32"
                src={`${getUrlProd}/images/favicon-bcp-loader.svg`}
                width="32"
                className="hydrated"
              />
            </figure>
            <div className="loader-rotation"></div>
          </div>
          <div className="loader-message mt-2">
            <p className="loader-txt flexo-regular">Generando PDF</p>
          </div>

        </div>
      )}
    </div>,
    document.getElementById("modal-root")!
  );
};
