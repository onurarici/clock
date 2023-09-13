import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store/store";

import App from "./components/App";
import Break from "./components/Break";
import Clock from "./components/Clock";
import Session from "./components/Session";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Break />
      <Session />
      <Clock />
    </Provider>
  </StrictMode>
);
