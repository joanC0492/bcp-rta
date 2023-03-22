import { Route, Routes } from "react-router-dom";
import { RecompenseProvider } from "@/app/BcpApp/store/context";
import { routes } from "./routes";
import { MultimediaProvider } from "../store/MultimediaContext";

export const BcpAppRouter = () => {
  return (
    <RecompenseProvider>
      <MultimediaProvider>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </MultimediaProvider>
    </RecompenseProvider>
  );
};
