import { data } from "@/app/BcpApp/data/bcpRecompensaData";
import { getUrlProd } from "@/shared/helpers";

interface IProps {
  className?: string;
  classNameImg?: string;
}

export const Header: React.FC<IProps> = ({
  className = "",
  classNameImg = "",
}) => {
  return (
    <header className={`mail__header mail__header--img ${className}`}>
      <img
        src={getUrlProd + "/images/mail/logo-header.png"}
        alt="Logo Header"
        className={`mail__header-img ${classNameImg}`}
      />
      <div className="mail__cloud-whithe">
        <img
          src={getUrlProd + "/images/mail/bg-white.png"}
          alt="Cloud White"
          className="mail__cloud-img"
        />
        <div className="position-absolute top-0 start-0">
          <p className="mail__cloud-txt flexo-boldit">
            {data.pdfData.textHeaderGlobo}
          </p>
        </div>
      </div>
    </header>
  );
};