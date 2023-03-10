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
  const isTotal: boolean = macrocategoria.trim() !== "TOTAL";

  return (
    <div
      className="table-bcp"
      style={{
        zIndex: 100 - zindex,
        top: `${-18 * zindex}px`,
      }}>
      <table className="table table-borderless table-bcp__tbl">
        <tbody className="table-bcp__body">
          {isTotal && (
            <tr className="table-bcp__header">
              <td className="table-bcp__title flexo-bold">{macrocategoria}</td>
            </tr>
          )}
          {data.reverse().map((item) => (
            <tr className="table-bcp__row" key={item.categoria}>
              <td className="table-bcp__col">
                <div className="d-flex justify-content-between">
                  <span
                    className={`
                      ${
                        isTotal
                          ? "table-bcp__txt flexo-regular"
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
                        ? "flexo-bold"
                        : "flexo-regular"
                    }
                    ${isTotal ? "" : "flexo-bold"}
                    `}>
                    S/{item.monto.toLocaleString("en-US")}
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
