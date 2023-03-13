import { srcImages } from "@/shared/helpers";

interface IProps {
  classes?: string;
}
export const Footer: React.FC<IProps> = ({ classes = "text-center" }) => {
  return (
    <footer className={`mail__footer ${classes}`}>
      <img
        src={srcImages + "/logo-footer.png"}
        alt="Logo Footer"
        className="mail__footer-img"
      />
    </footer>
  );
};
