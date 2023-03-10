import { Route, Routes } from "react-router-dom";
import { RecompenseProvider } from "@/app/BcpApp/store/context";
import { UserProvider } from "@/app/BcpApp/store/UserContext";
import { routes } from "./routes";

export const BcpAppRouter = () => {
  return (
    <UserProvider>
      <RecompenseProvider>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </RecompenseProvider>
    </UserProvider>
  );
};
