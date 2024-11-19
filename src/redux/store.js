import { configureStore } from '@reduxjs/toolkit';
import { persist_Reducer } from './persist';
import expenseReducer from './ExpenseSice';
import incomeReducer from './IncomeSlice';
const store = configureStore({
 reducer: {
 expense:expenseReducer,
 income: incomeReducer
 },
});

export default store;