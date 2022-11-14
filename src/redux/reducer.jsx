import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const handleReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    handleAdd: (state, action) => {
      state.push(action.payload);
      return state;
    },

    handleRemove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    handleUpdate: (state, action) => {
      return state.map((event) => {
        if (event.id === action.payload.id) {
          return {
            ...event,
            item: action.payload.item,
          };
        }
        return event;
      });
    },

    handleComplete: (state, action) => {
      return state.map((event) => {
        if (event.id === action.payload) {
          return {
            ...event,
            completed: true,
          };
        }
        return event;
      });
    },
  },
});

export const { handleAdd, handleRemove, handleUpdate, handleComplete } =
  handleReducer.actions;
export const reducer = handleReducer.reducer;
