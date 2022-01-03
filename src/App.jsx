import Main from "./layouts/Main";
import Products from "./pages/Products";
import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment } from "react";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route
          path="/products"
          element={
            <Main>
              <Products />
            </Main>
          }
        />
        <Route
          path="/products/:productId"
          element={
            <Main>
              <Detail />
            </Main>
          }
        />
        <Route
          path="/cart"
          element={
            <Main>
              <Cart />
            </Main>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
