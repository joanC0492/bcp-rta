export interface IResponseType {
  __type: string;
  UID: string;
  NAME: string;
}
export interface IResponseList {
  d: IResponseType[];
}

export interface IUser {
  uid: string;
  name: string;
}