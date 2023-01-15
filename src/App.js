import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./scss/_main.scss";

import ALLRoutes from "./data/routes";

import { Navbar } from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {
            ALLRoutes.map(({ id, routeLink, path }) => (
              <Route key={id} path={path} element={routeLink} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;