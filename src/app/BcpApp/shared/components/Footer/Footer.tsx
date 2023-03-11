import { srcImages } from "@/shared/helpers";

export const Footer = () => {
  return (
    <footer className="mail__footer text-end">
      <img
        src={srcImages + "/logo-footer.png"}
        alt="Logo Footer"
        className="mail__footer-img"
      />
    </footer>
  );
};
