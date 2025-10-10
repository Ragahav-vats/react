import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./assets/Components/RootLayout";
import Home from "./assets/Components/Home";
import "./assets/css/style.css";
import ProductListing from "./assets/Components/ProductListing";
import About from "./assets/Components/About";
import Services from "./assets/Components/Services";
import ContactUs from "./assets/Components/ContactUs";
import { Provider } from "react-redux";
import { store } from "./assets/Components/Redux Toolkit/ReduxToolkit";
import ViewCart from "./assets/Components/ViewCart";
import ProductDetails from "./assets/Components/ProductDetails";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductListing />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="view-cart" element={<ViewCart />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Provider>

  </BrowserRouter>,
);

