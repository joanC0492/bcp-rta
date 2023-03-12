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

  if (!isNotTotal) return <></>;

  return (
    <div
      className="table-bcp"
      style={{
        zIndex: 100 - zindex,
        top: `${-18 * zindex}px`,
      }}>
      <table className="table table-borderless table-bcp__tbl">
        <tbody className="table-bcp__body">
          {isNotTotal && (
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
                        isNotTotal
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
                    ${isNotTotal ? "" : "flexo-bold"}
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
