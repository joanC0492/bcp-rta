import { IResponseType, IUser } from "@/app/BcpApp/domain";

export const getUserAdapter = (dataResponse: IResponseType[]): IUser[] => {
  return dataResponse.map((data) => {
    return {
      uid: data.UID,
      name: data.NAME,
      dni: data.DNI,
    };
  });
};
