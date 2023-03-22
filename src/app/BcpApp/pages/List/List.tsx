import { Link } from "react-router-dom";
import { useUserContext } from "@/store/UserContext";
import { bcpListData } from "@/app/BcpApp/data/bcpListData";

export const List = () => {
  const { users } = useUserContext();
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-11 col-xl-10 mx-auto">
            <h1>{bcpListData.title}</h1>
            <hr />
            <table className="table table-hover">
              <thead>
                <tr>
                  {bcpListData.tableColumns.map((col, i) => (
                    <th scope="col" key={i}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={user.uid} style={{ verticalAlign: "middle" }}>
                    <th scope="row">{i}</th>
                    <td>{user.uid}</td>
                    <td>{user.name}</td>
                    <td>{user.nameBase}</td>
                    <td>
                      <Link to={"/?code=" + user.uid}>
                        {bcpListData.txtLink}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};