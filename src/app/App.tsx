"use client";

import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <div className="dark">{children}</div>
    </Provider>
  );
};

export default App;
