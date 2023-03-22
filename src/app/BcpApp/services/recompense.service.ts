import { IApp, Irta } from "@/app/BcpApp/domain";
import { getBcpAppAdapter } from "@/app/BcpApp/adapters/recompense.adapter";

const URL: string = import.meta.env.VITE_BCP_RECOMPENSE_URL;
const TYPE: string = import.meta.env.VITE_TYPE;

interface IQuerySql {
  d: Irta[];
}
const postRecompense = async (
  uid: string,
  dni: string,
  nameBase: string
): Promise<IApp | undefined> => {
  try {
    let res: Response;
    let data: Irta[];
    if (TYPE === "dev") {
      res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ obj: { UID: uid, NAME: "" } }),
      });
      const dataJson = await res.json();
      data = dataJson.d;

    } else {
      res = await fetch(URL);
      const dataJson: IQuerySql[] = await res.json();
      data = dataJson.find((item) => item.d[0].ID_MATRICULA === uid)!.d;
    }

    return getBcpAppAdapter(data, dni, nameBase);
  } catch (error) {
    console.log(error);
  }
};

export const Recompense = {
  postRecompense,
};