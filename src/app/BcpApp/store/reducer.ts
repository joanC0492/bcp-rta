import { IAction, IApp } from "../domain/recompense.interface";

export const reducer: React.Reducer<IApp, IAction> = (state, action) => {
  switch (action.type) {
    case "[RECOMPENSE] Set App":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};