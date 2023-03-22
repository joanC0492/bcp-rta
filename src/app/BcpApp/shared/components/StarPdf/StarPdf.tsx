import { getUrlProd } from "@/shared/helpers";

interface IProps {
  className?: "stars2--left" | "stars2--right";
}
export const StarPdf = ({ className = "stars2--left" }: IProps) => {
  return (
    <div>
      <img
        src={getUrlProd + "/images/stars-2.png"}
        alt="Stars"
        className={`stars2 ${className}`}
      />
    </div>
  );
};
