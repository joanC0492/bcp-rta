import { Route, Routes } from "react-router-dom";
import { BcpAppRouter } from "@/app/BcpApp/routes/BcpAppRouter";
import { UserProvider } from "@/store/UserContext";

export const AppRouter = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/*" element={<BcpAppRouter />} />
      </Routes>
    </UserProvider>
  );
};
