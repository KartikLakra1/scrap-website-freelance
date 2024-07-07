import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ChangeTheme {
  value: Boolean;
  theme: string;
}

const initialState: ChangeTheme = {
  value: true,
  theme: "light",
};

export const theme = createSlice({
  name: "themechanger",
  initialState,
  reducers: {
    toggle: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = theme.actions;

export default theme.reducer;
