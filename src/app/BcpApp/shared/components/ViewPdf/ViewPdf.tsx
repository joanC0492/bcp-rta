import { Header, BodyPdf, Footer } from "@/app/BcpApp/shared/components";
import { useMultimediaContext } from "@/app/BcpApp/store/MultimediaContext";

interface IProps {
  className?: string;
}
export const ViewPdf = ({ className }: IProps) => {
  const { elementsRef } = useMultimediaContext();

  return (
    <div
      id="mail"
      className={`mail animate__animated animate__fadeIn animate__fast ${className}`}
      ref={elementsRef.mailRef}>
      <Header />
      <BodyPdf />
      <Footer className="text-end pb-0 pt-5 py-md-5" />
    </div>
  );
};
