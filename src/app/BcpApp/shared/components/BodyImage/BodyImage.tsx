import { useRecompenseContext } from "@/app/BcpApp/store/context";
import { data } from "@/app/BcpApp/data/bcpRecompensaData";
import { getUrlProd } from "@/shared/helpers";
import { Benefit } from "@/app/BcpApp/shared/components";

export const BodyImage = () => {
  const { app } = useRecompenseContext();
  return (
    <>
      <div className="mail__body text-center" style={{ paddingBottom: "25px" }}>
        <div>
          <p className="mail__description flexo-bold mail__description--image">
            ¡Hola {app.nameBase}!
          </p>
        </div>

        <div className="mt-4">
          <div
            className="flexo-demi text-white"
            style={{
              fontSize: "18px",
              marginInline: "50px",
              lineHeight: "1.35",
            }}>
            <p>{data.imageData.text1}</p>
            <p>{data.imageData.text2}</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="image-alert flexo-demi">
            <p className="image-alert__txt">{data.imageData.textAlert1}</p>
            <p className="image-alert__txt">{data.imageData.textAlert2}</p>
            <p className="image-alert__txt">{data.imageData.textAlert3}</p>
          </div>
        </div>

        <div className="mt-3">
          <div className="position-relative">
            <img
              src={getUrlProd + data.imageData.imgTitle2022}
              alt="Title 2022"
            />
            <div>
              <img
                src={getUrlProd + "/images/stars.png"}
                alt="Stars"
                className="position-absolute"
                style={{
                  width: "50px",
                  left: "3px",
                  top: "-1px",
                }}
              />
            </div>
            <div>
              <img
                src={getUrlProd + "/images/stars.png"}
                alt="Stars"
                className="position-absolute"
                style={{
                  width: "50px",
                  right: "-1px",
                  top: "-1px",
                  transform: "rotate(120deg)",
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="position-relative text-center">
            <div
              className="position-absolute"
              style={{
                zIndex: 1,
                left: "50%",
                top: "0px",
                transform: "translateX(calc(-542px/2))",
              }}>
              <img
                src={getUrlProd + "/images/background-download.png"}
                alt="Background Download"
              />
            </div>
            <div
              className="d-flex align-items-center justify-content-center position-relative"
              style={{ zIndex: 9, top: "4px", height: "95px" }}>
              <div>
                <img
                  src={getUrlProd + "/images/icon-download.png"}
                  alt="Icon Download"
                />
              </div>
              <div
                className="text-white flexo-medium"
                style={{
                  paddingLeft: "7.5px",
                  paddingTop: "3.1px",
                  fontSize: "18px",
                  lineHeight: "1.25",
                }}>
                <p className="mb-0">{data.imageData.textInfo1}</p>
                <p className="mb-0">{data.imageData.textInfo2}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p
            className="flexo-demi text-white mb-0"
            style={{
              fontSize: "22.39px",
              marginInline: "40px",
              lineHeight: "1.25",
            }}>
            {data.imageData.textRecuerda1}
          </p>
        </div>

        <div className="mt-4">
          <div className="mx-auto">
            <div className="row">
              {data.imageData.cardsBeneficios.map((card) => (
                <Benefit key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="experiencia-woow__parent">
        <img
          src={getUrlProd + "/images/experiencia-woow.png"}
          alt=""
          className="experiencia-woow__img"
        />
      </div>
    </>
  );
};