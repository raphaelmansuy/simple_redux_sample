import React from "react";
import "./styles.css";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import Counter from "./components/Counter";


export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Simple Redux Sample</h1>
        <Counter />
      </Provider>
    </div>
  );
}
