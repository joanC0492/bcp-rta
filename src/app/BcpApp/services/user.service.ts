import { getUserAdapter } from "@/app/BcpApp/adapters/user.adapter";
import { IResponseList, IUser } from "@/app/BcpApp/domain";

const URL: string = import.meta.env.VITE_BCP_USER_URL;
const TYPE: string = import.meta.env.VITE_TYPE;

const getUser = async (): Promise<IUser[] | undefined> => {
  try {
    let res: Response;
    if (TYPE === "dev") {
      res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ obj: {} }),
      });
    } else {
      res = await fetch(URL);
    }

    const dataJson: IResponseList = await res.json();
    return getUserAdapter(dataJson.d);
  } catch (error) {
    console.log(error);
  }
};

export const UserService = {
  getUser,
};
