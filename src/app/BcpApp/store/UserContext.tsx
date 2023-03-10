import { createContext, useContext, useState } from "react";
import { IUser } from "@/app/BcpApp/domain";

interface IUserContext {
  users: IUser[];
  handleUsers: (users: IUser[]) => void;
}

const UserContext = createContext({} as IUserContext);

interface IProps {
  children: React.ReactNode;
}
const UserProvider: React.FC<IProps> = ({ children }) => {
  const [users, setUsers] = useState([] as IUser[]);

  const handleUsers = (users: IUser[]) => {
    setUsers([...users]);
  };

  return (
    <UserContext.Provider value={{ users, handleUsers }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
