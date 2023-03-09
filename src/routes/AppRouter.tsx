import { Route, Routes } from "react-router-dom";
import { BcpAppRouter } from "@/app/BcpApp/routes/BcpAppRouter";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<BcpAppRouter />} />
    </Routes>
  );
};
