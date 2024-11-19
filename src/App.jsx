import { useState } from 'react'
import './App.css'
import Layout from './components/layout'
import Header from './components/header'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import IncomeExpence from './modules/Income-Expense'
import Visualization from './modules/chart'
import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {

  
  const persistor = persistStore(store);
  

  return (
    <>
    

   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
     <Route path="/" element={<IncomeExpence/>}/>
     <Route path="/income" element={<IncomeExpence/>}/>
    <Route path="/expense" element={<IncomeExpence/>}/>
    <Route path="/visualization" element={<Visualization/>}/>
    </Route>
  
   </Routes>
   </BrowserRouter>
 
    </>
  )
}

export default App
