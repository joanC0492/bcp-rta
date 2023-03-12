import { srcImages } from "@/shared/helpers";

interface IProps {
  classes?: string;
}
export const Header: React.FC<IProps> = ({ classes = "" }) => {
  return (
    <header className={`mail__header text-center ${classes}`}>
      <img
        src={srcImages + "/logo-header.png"}
        alt="Logo Header"
        className="mail__header-img"
      />
      <div className="mail__cloud-whithe">
        <img
          src={srcImages + "/bg-white.png"}
          alt="Cloud White"
          className="mail__cloud-img"
        />
        <div className="position-absolute top-0 start-0">
          <p className="mail__cloud-txt flexo-boldit">Recompensa a la medida</p>
        </div>
      </div>
    </header>
  );
};
