import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./scss/_main.scss";

import ALLRoutes from "./data/navbarItems";

import { Navbar, Footer } from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {
            ALLRoutes.map(({ id, routeComponent, sendTo }) => (
              <Route key={id} path={sendTo} element={routeComponent} />
            ))
          }
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;