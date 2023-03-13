import { TableBcp } from "@/app/BcpApp/shared/components";
import { useRecompenseContext } from "@/app/BcpApp/store/context";

import { getUrlProd } from "@/shared/helpers";

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
      {/* <div className="text-center">
        <p className="mail__title flexo-bold mx-auto">{app.name}</p>
      </div> */}
      {/* className="text-center" */}
      <div style={{ textAlign: "justify" }}>
        <p className="mail__description flexo-regular mx-auto">
          En el BCP nuestro propósito es transformar planes en realidad, por
          ello te ofrecemos un paquete de Recompensa Total, el cual busca
          retribuir el logro de nuestras metas y objetivos así como recompensar
          el alto desempeño.
        </p>
        <p className="mail__description flexo-regular mx-auto">
          Te compartimos el detalle de la Recompensa Total Anual que disfrutaste
          en el 2022 gracias a tu contribución a los excelentes resultados de la
          organización. Este detalle está compuesto por tus compensación
          monetaria, el aporte que el BCP realiza para incrementar tus
          beneficios y los ahorros que has tenido por ser colaborador del BCP.
        </p>
        {/* <p className="mail__description flexo-demi mx-auto">
          Al ser parte del equipo WOW, recibe un paquete de RECOMPENSA TOTAL,
          que va más allá de su salario mensual.
        </p>
        <p className="mail__description flexo-demi mx-auto">
          La RECOMPENSA TOTAL, es el retorno monetario y no monetario en función
          al valor que aporta en los resultados de la organización y su nivel de
          desempeño.
        </p> */}
      </div>
      <div className="row mail__table-parent">
        {/* <div className="col-12">
          <p className="mail__table-title flexo-bold text-center">
            Por eso, en el BCP, queremos queremos que conozcas cuál es la
            RECOMPENSA TOTAL que ofrecemos.
          </p>
        </div> */}
        <div className="col-md-5 pt-3">
          <img
            className=""
            src={getUrlProd + "/images/experiencia-woow.png"}
            alt="Experiencia Woow"
          />
          <img
            className="mail__table-parent-employed"
            src={getUrlProd + "/images/mail/employed.png"}
            alt="Empleado"
          />
          <div className="table-bcp-parent__total">
            <p className="table-bcp-parent__total-txt flexo-regular">Total</p>
            <p className="table-bcp-parent__total-price flexo-bold">
              s/. {total?.monto.toLocaleString("en-US")}
            </p>
          </div>
        </div>
        <div className="ms-md-auto col-md-7">
          <div className="table-bcp-parent">
            {recompense.map((item, i) => (
              <TableBcp
                key={item.macrocategoria}
                macrocategoria={item.macrocategoria}
                data={item.data}
                zindex={i}
              />
            ))}
          </div>
        </div>

        {/* <div className="col-12 position-relative">
          <div className="">
            <img
              className="mail__table-parent-woow"
              src={getUrlProd + "/images/experiencia-woow.png"}
              alt="Experiencia Woow"
            />
            <img
              className="mail__table-parent-employed"
              src={getUrlProd + "/images/mail/employed.png"}
              alt="Empleado"
            />
          </div>
          <div className="col-12">
            <div className="table-bcp-parent__total">
              <p className="table-bcp-parent__total-txt flexo-regular">Total</p>
              <p className="table-bcp-parent__total-price flexo-bold">
                s/. {Number("149388").toLocaleString("en-US")}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
