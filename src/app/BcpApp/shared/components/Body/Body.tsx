import { useMemo } from "react";
import { TableBcp } from "@/app/BcpApp/shared/components";
import { useRecompenseContext } from "@/app/BcpApp/store/context";
import { getUrlProd } from "@/shared/helpers";
import { pdfData } from "@/app/BcpApp/data/pdfData";

export const Body = () => {
  const { app } = useRecompenseContext();
  const recompense = app.recompense || [];

  const total = recompense
    .map((r) => {
      return r.data.find((d) => d.categoria === "Total");
    })
    .find((r) => r !== undefined);

  return (
    <div className="mail__body">
      <div
        className="flexo-medium text-center mx-auto"
        style={{ maxWidth: "775px" }}>
        <p className="mail__description">{pdfData.text1}</p>
        <p className="mail__description">{pdfData.text2}</p>
        <p className="mail__description">{pdfData.text3}</p>
      </div>

      <div className="row mail__table-parent">
        <div className="ms-md-auto col-md-12">
          <div className="table-bcp-parent">
            {recompense.map((item, i, arr) => (
              <div key={item.macrocategoria}>
                <TableBcp
                  macrocategoria={item.macrocategoria}
                  data={item.data}
                  zindex={i}
                />
                {i < arr.length - 2 && <div className="line-table"></div>}
              </div>
            ))}

            <img
              src={getUrlProd + "/images/background-to-table.png"}
              alt="chanchito"
              className="table-bcp-parent__before"
            />

            <div className="text-center">
              <div className="table-bcp-parent__total flexo-bold">
                <p className="table-bcp-parent__total-txt">RECOMPENSA TOTAL</p>
                <p className="table-bcp-parent__total-txt">
                  S/ {total?.monto.toLocaleString("en-US")}
                </p>
              </div>
            </div>

            {/* Estrella 1 */}
            <div>
              <img
                src={getUrlProd + "/images/stars-2.png"}
                alt="Stars"
                className="position-absolute"
                style={{
                  width: "116px",
                  left: "-146px",
                  top: "50%",
                }}
              />
            </div>
            {/* Estrella 2 */}
            <div>
              <img
                src={getUrlProd + "/images/stars-2.png"}
                alt="Stars"
                className="position-absolute"
                style={{
                  width: "116px",
                  right: "-146px",
                  top: "15%",
                }}
              />
            </div>
          </div>

          {/*  */}
          <div style={{ marginTop: "50px" }}>
            <div className="position-relative text-center">
              <div
                className="position-absolute"
                style={{
                  zIndex: 1,
                  left: "50%",
                  top: "0px",
                  transform: "translateX(-50%)",
                }}>
                <img
                  src={getUrlProd + "/images/background-large-link.png"}
                  alt="Background"
                />
              </div>

              <div
                className="d-flex align-items-center justify-content-center position-relative"
                style={{ zIndex: 9, top: "4px", height: "164px" }}>
                <div
                  className="text-white flexo-medium"
                  style={{
                    paddingLeft: "7.5px",
                    marginTop: "-3.9px",
                    fontSize: "34px",
                    lineHeight: "1.25",
                  }}>
                  <p className="mb-0">
                    Revisa todos los beneficios que te ofrece
                  </p>
                  <p className="mb-0">
                    el BCP para vivir una Experiencia WOW{" "}
                    <span
                      style={{ color: "#FFB71C", textDecoration: "underline" }}>
                      aquí.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="experiencia-woow__parent">
          <img
            src={getUrlProd + "/images/experiencia-woow.png"}
            alt=""
            className="experiencia-woow__img"
          />
        </div>
      </div>
    </div>
  );
};
