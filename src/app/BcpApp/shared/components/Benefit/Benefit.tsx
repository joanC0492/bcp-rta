import { getUrlProd } from "@/shared/helpers";

interface IProps {
  id: number;
  title: string;
  image: string;
}
export const Benefit: React.FC<IProps> = ({ title, image }) => {
  return (
    <div className="col-4">
      <div>
        <img
          className="img-fluid"
          src={getUrlProd + image}
          alt="Background beneficios"
        />
      </div>
      <div
        className="flexo-mediumit"
        style={{
          maxWidth: "100%",
          margin: "auto",
          fontSize: "18.71px",
          color: "white",
          lineHeight: "22px",
        }}>
        <p className="mb-0" dangerouslySetInnerHTML={{ __html: title }}></p>
      </div>
    </div>
  );
};
