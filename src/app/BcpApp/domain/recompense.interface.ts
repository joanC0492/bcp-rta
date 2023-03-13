export interface IData {
  orden: number;
  categoria: string;
  monto: number;
}
export interface IRecompense_ {
  macrocategoria: string;
  data: IData[];
}
export interface IApp {
  uid: string;
  name: string;
  nameBase: string;
  dni: string;
  recompense: IRecompense_[];
}

export type typeAction = "[RECOMPENSE] Set App" | "[RECOMPENSE] Add Recompense";
export interface IAction {
  type: typeAction;
  payload: IApp;
}