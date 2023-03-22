import { createContext, useContext } from "react";
import {
  IElementsRef,
  ILoading,
  IMultimediaContext,
} from "@/app/BcpApp/domain";
import { useExportMultimedia } from "@/app/BcpApp/shared/hooks";

// Lo que enviaremos por provider
const initialState: IMultimediaContext = {
  exportPdf: () => {},
  exportImg: () => {},
  elementsRef: {} as IElementsRef,
  loading: {} as ILoading,
  showViewImage: false,
};

const MultimediaContext = createContext<IMultimediaContext>(initialState);

interface IProps {
  children: React.ReactNode;
}
const MultimediaProvider = ({ children }: IProps) => {
  const { exportPdf, exportImg, elementsRef, loading, showViewImage } =
    useExportMultimedia();

  return (
    <MultimediaContext.Provider
      value={{ exportPdf, exportImg, elementsRef, loading, showViewImage }}>
      {children}
    </MultimediaContext.Provider>
  );
};

const useMultimediaContext = () => {
  return useContext(MultimediaContext);
};

export { MultimediaProvider, useMultimediaContext };
