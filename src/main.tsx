import ReactDOM from "react-dom/client";
import { App } from "./App";
import { HashRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("form1") as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>
);
