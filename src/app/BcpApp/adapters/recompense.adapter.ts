import { IApp, IRecompense_, Irta } from "@/app/BcpApp/domain";

const bcpAppEmpty: IApp = {
  uid: "",
  name: "",
  nameBase: "",
  dni: "",
  recompense: [],
};

export const getBcpAppAdapter = (
  dataResponse: Irta[],
  dni: string,
  nameBase: string
): IApp => {
  if (dataResponse.length === 0) return bcpAppEmpty;

  // Obtenemos el id y nombre que se esta repitiendo
  const { ID_MATRICULA: uid, NOMBRES_COLAB: name } = dataResponse.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.ID_MATRICULA === value.ID_MATRICULA &&
          t.NOMBRES_COLAB === value.NOMBRES_COLAB
      )
  )[0];

  // Obtenemos las macrocategorias
  const macroCategoriasResponse = dataResponse.map(
    (data) => data.MACROCATEGORIA
  );
  const macroCategorias = [...new Set(macroCategoriasResponse)];

  // Obtenemos las recompensas
  const recompense: IRecompense_[] = macroCategorias.map((macro) => {
    return {
      macrocategoria: macro,
      data: dataResponse
        .filter((item) => item.MACROCATEGORIA === macro)
        .map((item) => {
          return {
            orden: Number(item.ORDEN),
            categoria: item.CATEGORIA,
            monto: Number(item.MONTO),
          };
        }),
    };
  });

  const bcpApp: IApp = {
    uid,
    name,
    nameBase,
    dni,
    recompense,
  };

  return bcpApp;
};
