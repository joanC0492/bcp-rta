import { createContext, useContext, useReducer, useState } from "react";
import { IAction, IApp, IRecompenseContext } from "@/app/BcpApp/domain";
import { reducer } from "./reducer";

// Lo que enviaremos por provider
const initialState: IRecompenseContext = {
  app: {} as IApp,
  setApp: (recompense: IApp) => {},
  loading: false,
  handleLoading: () => {},
};

// Lo que necesitar el reducer
const init = (initialState: IRecompenseContext): IApp => {
  return {} as IApp;
};

const RecompenseContext = createContext(initialState);

interface IProps {
  children: React.ReactNode;
}
const RecompenseProvider: React.FC<IProps> = ({ children }) => {
  const [app, dispatch] = useReducer(reducer, initialState, init);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoading = (state: boolean) => {
    setLoading(state);
  };

  const setApp = (app: IApp) => {
    const action: IAction = {
      type: "[RECOMPENSE] Set App",
      payload: app,
    };
    dispatch(action);
  };

  return (
    <RecompenseContext.Provider
      value={{
        app,
        setApp,
        loading,
        handleLoading,
      }}>
      {children}
    </RecompenseContext.Provider>
  );
};

const useRecompenseContext = () => {
  return useContext(RecompenseContext);
};

export { RecompenseProvider, useRecompenseContext };
