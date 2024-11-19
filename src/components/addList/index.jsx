import React, { useEffect, useState } from "react";
import { useParams ,useLocation} from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/ExpenseSice";
import { addIncome } from "../../redux/IncomeSlice";
const AddListItem = (setopenCallback) => {
      const [data,setData]=useState({
        title:"",
        amount:0,
        category:"",
        date:new Date(),
        description:"",
        id:""
    
      })
      const path= localStorage.getItem("path");
  const dispatch = useDispatch();
  const handClose = () => {
    if(path==="income"){
        dispatch(addIncome(data));
    }
    else if(path==="expense"){
    dispatch(addExpense(data));
    }

    setopenCallback.setopenCallback();
    
  };
  useEffect(() => {   
    setData({
        title:"",
        amount:"",
        category:"",
        date:new Date(),
        id:"",
        description:""
    })
    },[path])
  
  return (
<div className="form-container">
    <h2 className="font-bold text-3xl">Add {path==="expense"?"Expense":"Income"}</h2>
  <form>
    <div className="form-group">
      <label>Title:</label>
      <input
        type="text"
        placeholder="Enter title"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
    </div>
    <div className="form-group">
      <label>Amount:</label>
      <input
        type="number"
        placeholder="Enter amount"
        value={data.amount}
        onChange={(e) => setData({ ...data, amount: e.target.value })}
      />
    </div>
    <div className="form-group">
      <label>Category:</label>
      <input
        type="text"
        placeholder="Enter category"
        value={data.category}
        onChange={(e) => setData({ ...data, category: e.target.value })}
      />
    </div>
    <div className="form-group">
      <label>Description:</label>
      <input
        type="text"
        placeholder="Enter Description"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
    </div>

    <div className="form-group">
      <label>Date:</label>
      <input
        type="date"
        placeholder="Select date"
        value={data.date}
        onChange={(e) => setData({ ...data, date: e.target.value })}
      />
    </div>
  </form>
  <button className="submit-btn" onClick={handClose}>
    Submit
  </button>
</div>  );
};

export default AddListItem;
