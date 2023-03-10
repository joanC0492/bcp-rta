import { Header } from "@/app/BcpApp/shared/components";
import { useRecompenseContext } from "@/app/BcpApp/store/context";
import { getUrlProd } from "@/shared/helpers";

const srcImages: string = getUrlProd + "/images/mail";

export const ViewImage = () => {
  const { app } = useRecompenseContext();

  return (
    <>
      <Header src={srcImages} classes="text-center mt-5" />
      <div className="mail__body text-center">
        <div>
          <p className="mail__description flexo-demi mail__description--image">
            Hola
          </p>
          <p className="mail__title flexo-bold mx-auto">
            {/* {app.name?.split(" ")[0]}, */}
            {app.name},
          </p>
        </div>

        <div className="mt-4">
          <p className="flexo-demi h4 text-white">
            Llegó la hora de conocer cuál fue tu
          </p>
          <p className="mail__title flexo-demi mx-auto mt-4">
            RECOMPENSA TOTAL ANUAL 2022
          </p>
        </div>

        <div className="mt-4">
          <div>
            <img
              src={getUrlProd + "/images/icon-pdf.png"}
              alt="Logo PDF"
              width={24}
            />
          </div>
          <div className="mt-2">
            <p className="flexo-demi h4 text-white mb-0">Abre el PDF adjunto</p>
            <p className="flexo-demi h4 text-white">
              para conocer a detalle tu recompensa
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="mail__line--image mx-auto"></div>
        </div>

        <div className="mt-4">
          <p className="flexo-demi h4 text-white mb-0">
            Además no olvides que también puedes conocer sobre los siguientes
            beneficios:
          </p>
        </div>
      </div>
    </>
  );
};
