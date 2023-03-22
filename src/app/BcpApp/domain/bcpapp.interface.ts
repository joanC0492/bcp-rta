import { IApp } from "./";

export interface IElementsRef {
  mailRef: React.RefObject<HTMLDivElement>;
  imageRef: React.RefObject<HTMLDivElement>;
  refNavigate: React.RefObject<HTMLDivElement>;
}
export interface ILoading {
  state: boolean;
  text?: string;
}
export interface IMultimediaContext {
  exportPdf: () => void;
  exportImg: () => void;
  elementsRef: IElementsRef;
  loading: ILoading;
  showViewImage: boolean;
}

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
