import { getUrlProd } from "@/shared/helpers";

interface IProps {
  text: string;
}
export const Benefit: React.FC<IProps> = ({ text }) => {
  return (
    <div className="col-4 position-relative">
      <div>
        <img
          className="img-fluid"
          src={getUrlProd + "/images/bg-beneficios.png"}
          alt="Background beneficios"
        />
      </div>
      <div
        className="position-absolute flexo-demi"
        style={{
          left: "21px",
          top: "50px",
          maxWidth: "135px",
          margin: "auto",
          fontSize: "16px",
          color: "white",
          lineHeight: "22px",
        }}>
        <p className="mb-0">{text}</p>
      </div>
    </div>
  );
};
