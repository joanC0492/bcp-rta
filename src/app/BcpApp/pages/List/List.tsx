import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "@/app/BcpApp/domain";
import { UserService } from "@/app/BcpApp/services";

export const List = () => {
  const [users, setUsers] = useState([] as IUser[]);

  useEffect(() => {
    let isCancelled = false;
    const getUser = async () => {
      try {
        const data = (await UserService.getUser()) || ([] as IUser[]);
        if (!isCancelled) setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-11 col-xl-10 mx-auto">
            <h1>Lista de Usuarios</h1>
            <hr />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Código</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Enlace</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={user.uid} style={{ verticalAlign: "middle" }}>
                    <th scope="row">{i}</th>
                    <td>{user.uid}</td>
                    <td>{user.name}</td>
                    <td>
                      <Link to={"/?code=" + user.uid}>Link</Link>
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
