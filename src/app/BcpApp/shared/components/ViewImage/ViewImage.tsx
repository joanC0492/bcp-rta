import { BodyImage, Footer, Header } from "@/app/BcpApp/shared/components";
import { useMultimediaContext } from "@/app/BcpApp/store/MultimediaContext";

interface IProps {
  className?: string;
}

export const ViewImage = ({ className }: IProps) => {
  const { elementsRef } = useMultimediaContext();
  return (
    <div
      id="image"
      className={`mail mail--image animate__animated animate__fadeIn animate__fast ${className}`}
      ref={elementsRef.imageRef}>
      <Header
        className="text-center mt-5"
        classNameImg="mail__header-img--img"
      />
      <BodyImage />
      <Footer className="text-end" />
    </div>
  );
};
