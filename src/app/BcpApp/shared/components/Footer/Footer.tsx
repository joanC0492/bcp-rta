interface IProps {
  src: string;
}
export const Footer: React.FC<IProps> = ({ src }) => {
  return (
    <footer className="mail__footer text-end">
      <img
        src={src + "/logo-footer.png"}
        alt="Logo Footer"
        className="mail__footer-img"
      />
    </footer>
  );
};
