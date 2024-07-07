import { configureStore } from "@reduxjs/toolkit";
import theme from "./slices/themechanger";

export const store = configureStore({
  reducer: {
    themechanger: theme,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
