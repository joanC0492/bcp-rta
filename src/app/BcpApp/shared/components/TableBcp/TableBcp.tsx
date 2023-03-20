import { IData } from "@/app/BcpApp/domain";

interface IProps {
  macrocategoria: string;
  data: IData[];
  zindex: number;
}

export const TableBcp: React.FC<IProps> = ({
  macrocategoria,
  data,
  zindex,
}) => {
  const isNotTotal: boolean = macrocategoria.trim() !== "TOTAL";

  const objMacro: Record<string, string> = {
    CTA: "Los ingresos que recibiste",
    "APORTES BCP": "Lo que el BCP aportó",
    "AHORRO BCP": "Lo que ahorraste",
  };

  const macroCategoria: string = objMacro[macrocategoria] || macrocategoria;

  if (!isNotTotal) return <></>;

  return (
    <div className="table-bcp">
      <table className="table table-borderless table-bcp__tbl">
        <tbody className="table-bcp__body">
          {isNotTotal && (
            <>
              <tr className="table-bcp__header">
                <td className="table-bcp__title flexo-heavy">
                  {macroCategoria}
                </td>
              </tr>
              <tr className="table-bcp__row">
                <td className="table-bcp__col">
                  <div
                    className="d-flex justify-content-between"
                    style={{ paddingTop: "25px" }}>
                    <span></span>
                    <span
                      className="table-bcp__txt flexo-bold"
                      style={{ minWidth: "82px", paddingBottom: "5px" }}>
                      S/
                    </span>
                  </div>
                </td>
              </tr>
            </>
          )}
          {data.reverse().map((item) => (
            <tr
              className="table-bcp__row table-bcp__row--bg"
              key={item.categoria}>
              <td className="table-bcp__col">
                <div className="d-flex justify-content-between">
                  <span
                    className={`
                      ${
                        isNotTotal
                          ? "table-bcp__txt flexo-medium"
                          : "table-bcp__title flexo-bold"
                      }
                      ${item.categoria === "Sub Total" ? "flexo-bold" : ""}
                        `}>
                    {item.categoria}:
                  </span>
                  <span
                    className={`table-bcp__txt 
                    ${
                      item.categoria === "Sub Total"
                        ? "flexo-bold asd"
                        : "flexo-bold"
                    }
                    ${isNotTotal ? "" : "flexo-bold"}
                    `}>
                    {item.categoria === "Sub Total" ? "S/ " : ""}
                    {item.monto.toLocaleString("en-US")}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
