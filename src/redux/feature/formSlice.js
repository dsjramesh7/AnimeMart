import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData: (state, action) => {
      console.log("Payload received in reducer:", action.payload);
      state.formData = action.payload;
    },
    clearFormData: (state) => {
      state.formData = {};
    },
  },
});

export const { addFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;
