import { pdfData } from "@/app/BcpApp/data/pdfData";
import { getUrlProd } from "@/shared/helpers";

interface IProps {
  classes?: string;
}
export const Footer: React.FC<IProps> = ({ classes = "text-end py-5" }) => {
  return (
    <footer className={`mail__footer ${classes}`}>
      <img
        src={getUrlProd + pdfData.imgFooter}
        alt="Logo Footer"
        className="mail__footer-img"
      />
    </footer>
  );
};
