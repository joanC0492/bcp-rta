import { imageData } from "@/app/BcpApp/data/imageData";
import { Benefit, Footer, Header } from "@/app/BcpApp/shared/components";
import { useRecompenseContext } from "@/app/BcpApp/store/context";
import { getUrlProd } from "@/shared/helpers";

export const ViewImage = () => {
  const { app } = useRecompenseContext();
  return (
    <>
      <Header classes="text-center mt-5" classesImg="mail__header-img--img" />
      <div className="experiencia-woow__parent">
        <img
          src={getUrlProd + "/images/experiencia-woow.png"}
          alt=""
          className="experiencia-woow__img"
        />
      </div>
      <div className="mail__body text-center">
        <div>
          <p className="mail__description flexo-demi mail__description--image">
            ¡Hola {app.nameBase}!
          </p>
        </div>

        <div className="mt-4">
          <div className="">
            <p className="flexo-regular h4 text-white">{imageData.text1}</p>
            <p className="flexo-regular h4 text-white">{imageData.text2}</p>
          </div>
        </div>

        <div className="mt-5">
          <div className="image-alert flexo-bold">
            <p className="image-alert__txt">{imageData.textAlert1}</p>
            <p className="image-alert__txt">{imageData.textAlert2}</p>
            <p className="image-alert__txt">{imageData.textAlert3}</p>
          </div>
        </div>

        <div className="mt-5">
          <div>
            <p className="flexo-regular h5 text-white mb-0">
              {imageData.textInfo1}
            </p>
            <p className="flexo-regular h5 text-white">{imageData.textInfo2}</p>
            <p className="flexo-regular h5 text-white">{imageData.textInfo3}</p>
          </div>
          <div className="mt-2">
            <img
              src={getUrlProd + "/images/icon-pdf.png"}
              alt="Logo PDF"
              width={24}
            />
          </div>
        </div>

        <div className="mt-4">
          <p
            className="flexo-demi h4 text-white mb-0"
            style={{ fontSize: "22px" }}>
            {imageData.textRecuerda1}
          </p>
        </div>

        <div className="mt-4">
          <div className="mx-auto" style={{ width: "80%" }}>
            <div className="row">
              <Benefit text={imageData.textBeneficio1} />
              <Benefit text={imageData.textBeneficio2} />
              <Benefit text={imageData.textBeneficio3} />
            </div>
          </div>
        </div>
      </div>
      <Footer classes="text-end" />
    </>
  );
};
