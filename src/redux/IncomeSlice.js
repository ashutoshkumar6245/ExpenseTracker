import { createSlice } from "@reduxjs/toolkit";


const incomeSlice = createSlice({
    name: "income",
    initialState: [],
    reducers: {
      addIncome: (state, action) => {
        const newTodo = {
         ...action.payload,id: Date.now()
        };
        state.push(newTodo);
        // localStorage.setItem("income",JSON.stringify(state));
      },
      editIncome: (state, action) => {
        const todo = state.find((todo) => todo.id === action.payload.id);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      deleteIncome: (state, action) => {
        debugger
        const index = state.findIndex((income) => income.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
    },
  });
  export const { addIncome, editIncome, deleteIncome} = incomeSlice.actions;
  export default incomeSlice.reducer;
  