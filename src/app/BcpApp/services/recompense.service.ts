import { IApp, Irta } from "@/app/BcpApp/domain";
import { getBcpAppAdapter } from "@/app/BcpApp/adapters/recompense.adapter";

const URL: string = import.meta.env.VITE_BCP_RECOMPENSE_URL;
const TYPE: string = import.meta.env.VITE_TYPE;

interface IQuerySql {
  d: Irta[];
}
const postRecompense = async (uid: string): Promise<IApp | undefined> => {
  try {
    let res: Response;
    if (TYPE === "dev") {
      res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ obj: { UID: uid, NAME: "" } }),
      });
      const dataJson = await res.json();
      const data: Irta[] = dataJson.d;
      return getBcpAppAdapter(data);
    } else {
      res = await fetch(URL);
      const dataJson: IQuerySql[] = await res.json();
      const data: Irta[] = dataJson.find(
        (item) => item.d[0].ID_MATRICULA === uid
      )!.d;
      return getBcpAppAdapter(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const Recompense = {
  postRecompense,
};
