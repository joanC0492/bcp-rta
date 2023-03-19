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
      <div style={{ textAlign: "justify" }}>
        <p className="mail__description flexo-regular mx-auto">
          {pdfData.text1}
        </p>
        <p className="mail__description flexo-regular mx-auto mb-1">
          {pdfData.text2}
        </p>
      </div>
      <div className="row mail__table-parent">
        <div className="col-md-5 pt-3">
          <img
            className=""
            src={getUrlProd + pdfData.imgWoow}
            alt="Experiencia Woow"
          />
          <img
            className="mail__table-parent-employed"
            src={getUrlProd + pdfData.imgEmployed}
            alt="Empleado"
          />
          <div className="table-bcp-parent__total">
            <p className="table-bcp-parent__total-txt flexo-regular">
              {pdfData.txtTotal}
            </p>
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
            <img src={getUrlProd + "/images/chanchito.png"} alt="chanchito" className="table-bcp-parent__before"/>
          </div>
        </div>
      </div>
    </div>
  );
};
