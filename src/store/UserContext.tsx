import { createContext, useContext, useState, useEffect } from "react";
import { IUser } from "@/app/BcpApp/domain";
import { useUsers } from "@/shared/hooks";

interface IUserContext {
  users: IUser[];
  isLoading: boolean;
  handleUsers: (users: IUser[]) => void;
}

const UserContext = createContext({} as IUserContext);

interface IProps {
  children: React.ReactNode;
}
const UserProvider: React.FC<IProps> = ({ children }) => {
  const { users, completed } = useUsers();
  const [tmpUsers, tmpSetUsers] = useState(users);

  const handleUsers = (users: IUser[]) => {
    tmpSetUsers([...users]);
  };

  useEffect(() => {
    if (completed === true) {
      tmpSetUsers(users);
    }
  }, [users]);

  return (
    <UserContext.Provider
      value={{ users: tmpUsers, handleUsers, isLoading: !completed }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
