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
          <p className="flexo-regular h4 text-white">
            Este 2022 hemos superado muchos retos juntos y logrado cumplir
            nuestros objetivos propuestos.
          </p>
          <p className="flexo-regular h4 text-white">
            ¡Gracias a tu compromiso con el Banco, logramos transformar planes
            en realidad nuestros y de nuestros clientes!
          </p>
          <p className="flexo-regular h4 text-white">
            Hoy queremos celebrar y compartir contigo los beneficios que forman
            parte de tu Recompensa Total que disfrutaste por ser colaborador
            BCP.
          </p>
          {/* <p className="mail__title flexo-demi mx-auto mt-4">
            ¡Gracias a tu compromiso con el Banco, logramos transformar planes
            en realidad nuestros y de nuestros clientes!
          </p> */}
        </div>

        <div className="mt-5">
          <div className="image-alert flexo-bold">
            <p className="image-alert__txt">
              Por eso, en el BCP, queremos que conozcas
            </p>
            <p className="image-alert__txt">
              cuál es la RECOMPENSA TOTAL que haz
            </p>
            <p className="image-alert__txt">recibido durante el 2022</p>
          </div>
        </div>

        <div className="mt-5">
          <div>
            <p className="flexo-demi h5 text-white mb-0">
              Para más información,
            </p>
            <p className="flexo-demi h5 text-white">
              descarga el adjunto del correo.
            </p>
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
            Recuerda que haz podido disfrutar de más beneficios como:
          </p>
        </div>

        <div className="mt-4">
          <div className="mx-auto" style={{ width: "80%" }}>
            <div className="row">
              <Benefit text={"Plataforma de Bienestar"} />
              <Benefit text={"Beneficios financieros"} />
              <Benefit text={"Seguro Oncológico"} />
            </div>
          </div>
        </div>
      </div>
      <Footer classes="text-end" />
    </>
  );
};
