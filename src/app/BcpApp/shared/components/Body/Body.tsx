import { TableBcp } from "@/app/BcpApp/shared/components";
import { useRecompenseContext } from "@/app/BcpApp/store/context";

export const Body = () => {
  const { app } = useRecompenseContext();
  const recompense = app.recompense || [];
  return (
    <div className="mail__body">
      <p className="mail__title flexo-bold">{app.name}</p>
      <p className="mail__description flexo-demi">
        But I must explain to you how all this mistaken idea of denouncing pl
        easure and praising pain was born and I will give you a complete acco
        unt of the system, and expound the actual teachings of the great expl
        orer of the of human happiness.
      </p>

      <div className="row mail__table-parent">
        <div className="ms-md-auto col-md-7">
          <p className="mail__table-title flexo-bold">
            Sed ut perspiciatis peu de omnis iste:
          </p>

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
      </div>
    </div>
  );
};
