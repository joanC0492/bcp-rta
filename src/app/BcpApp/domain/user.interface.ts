export interface IResponseType {
  __type: string;
  UID: string;
  NAME: string;
  NAME_BASE: string;
  DNI: string;
}
export interface IResponseList {
  d: IResponseType[];
}

export interface IUser {
  uid: string;
  name: string;
  nameBase: string;
  dni: string;
}
