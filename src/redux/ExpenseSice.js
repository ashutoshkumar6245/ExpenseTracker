import { createSlice } from "@reduxjs/toolkit";


const expenseSlice = createSlice({
    name: "expenses",
    initialState: [],
    reducers: {
      addExpense: (state, action) => {
        const newExpense = {
         ...action.payload,id: Date.now()
        };
        state.push(newExpense);
      },
      editExpense: (state, action) => {
        const todo = state.find((todo) => todo.id === action.payload.id);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      deleteExpense: (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
    },
  });
  export const { addExpense, editExpense, deleteExpense} = expenseSlice.actions;
  export default expenseSlice.reducer;
  