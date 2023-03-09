import { IApp } from "./";

export interface IRecompenseContext {
  app: IApp;
  setApp: (recompense: IApp) => void;
}
export interface Irta {
  CATEGORIA: string;
  COLOR: string;
  ID_MATRICULA: string;
  MACROCATEGORIA: string;
  MONTO: string;
  NOMBRES_COLAB: string;
  NOMBRE_JEFE: string;
  ORDEN: string;
  PRCTJ: string;
}
