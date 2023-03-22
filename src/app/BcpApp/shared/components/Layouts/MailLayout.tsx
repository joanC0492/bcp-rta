import { Loader } from "@/shared/components";
import { Navigate } from "@/app/BcpApp/shared/components";
import { useMultimediaContext } from "@/app/BcpApp/store/MultimediaContext";
import "animate.css";

interface IProps {
  children: React.ReactNode;
}
export const MailLayout: React.FC<IProps> = ({ children }) => {
  const { loading } = useMultimediaContext();

  return (
    <>
      <Navigate />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center py-4">{children}</div>
          </div>
        </div>
      </div>
      {loading.state && <Loader text={loading.text} />}
    </>
  );
};