interface IProps {
  src: string;
}
export const Header: React.FC<IProps> = ({ src }) => {
  return (
    <header className="mail__header">
      <img
        src={src + "/logo-header.png"}
        alt="Logo Header"
        className="mail__header-img"
      />
      <div className="mail__cloud-whithe">
        <img
          src={src + "/bg-white.png"}
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
