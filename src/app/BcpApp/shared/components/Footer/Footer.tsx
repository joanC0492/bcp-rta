import { data } from "@/app/BcpApp/data/bcpRecompensaData";
import { getUrlProd } from "@/shared/helpers";

interface IProps {
  className?: string;
}
export const Footer: React.FC<IProps> = ({ className = "" }) => {
  return (
    <footer className={`mail__footer ${className}`}>
      <img
        src={getUrlProd + data.pdfData.imgFooter}
        alt="Logo Footer"
        className="mail__footer-img"
      />
    </footer>
  );
};