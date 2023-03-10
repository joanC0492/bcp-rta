import { TableBcp } from "@/app/BcpApp/shared/components";
import { useRecompenseContext } from "@/app/BcpApp/store/context";

export const Body = () => {
  const { app } = useRecompenseContext();
  const recompense = app.recompense || [];
  return (
    <div className="mail__body">
      <div className="text-center">
        <p className="mail__title flexo-bold mx-auto">{app.name}</p>
      </div>
      <div className="text-center">
        <p className="mail__description flexo-demi mx-auto">
          Al ser parte del equipo WOW, recibe un paquete de RECOMPENSA TOTAL,
          que va más allá de su salario mensual.
        </p>
        <p className="mail__description flexo-demi mx-auto">
          La RECOMPENSA TOTAL, es el retorno monetario y no monetario en función
          al valor que aporta en los resultados de la organización y su nivel de
          desempeño.
        </p>
      </div>
      <div className="row mail__table-parent">
        <div className="col-12">
          <p className="mail__table-title flexo-bold text-center">
            Por eso, en el BCP, queremos queremos que conozcas cuál es la
            RECOMPENSA TOTAL que ofrecemos.
          </p>
        </div>
        <div className="ms-md-auto col-md-7 pt-3">
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
