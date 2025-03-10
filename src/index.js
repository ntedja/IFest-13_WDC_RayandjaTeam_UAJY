import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WishlistProvider } from "./pages/WishlistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WishlistProvider>
    <App />
  </WishlistProvider>
);