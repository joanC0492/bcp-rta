import { StarPdf, TableBcp } from "@/app/BcpApp/shared/components";
import { useRecompenseContext } from "@/app/BcpApp/store/context";
import { getUrlProd } from "@/shared/helpers";
import { data } from "@/app/BcpApp/data/bcpRecompensaData";

export const BodyPdf = () => {
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
        <p className="mail__description">{data.pdfData.text1}</p>
        <p className="mail__description">{data.pdfData.text2}</p>
        <p className="mail__description">{data.pdfData.text3}</p>
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
                <p className="table-bcp-parent__total-txt">
                  {data.pdfData.txtTotal}
                </p>
                <p className="table-bcp-parent__total-txt">
                  S/ {total?.monto.toLocaleString("en-US")}
                </p>
              </div>
            </div>

            {/* Estrella 1 */}
            <StarPdf className="stars2--left" />

            {/* Estrella 2 */}
            <StarPdf className="stars2--right" />
          </div>

          {/*  */}
          <div className="beneficio">
            <div className="beneficio__container">
              <div className="position-absolute beneficio__figure">
                <img
                  src={getUrlProd + "/images/background-large-link.png"}
                  alt="Background"
                  className="beneficio__img-background"
                />
              </div>
              <div className="beneficio__content">
                <div className="text-white flexo-medium beneficio__description">
                  <p className="mb-0">{data.pdfData.txtBeneficio1}</p>
                  <p className="mb-0">
                    {data.pdfData.txtBeneficio2}
                    <span className="beneficio__link">
                      {data.pdfData.txtBeneficio3}
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
            alt="experiencia woow"
            className="experiencia-woow__img"
          />
        </div>
      </div>
    </div>
  );
};
