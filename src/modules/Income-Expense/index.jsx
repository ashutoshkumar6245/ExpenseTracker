import React, { useEffect } from "react";
import List from "../../components/list";
import AddListItem from "../../components/addList";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const IncomeExpence = () => {
  const  pathname  = localStorage.getItem('path');
  console.log(pathname,"pathhhh");
  const [open, setopen] = React.useState(false);
  const handleAddListItems = () => {
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };
  useEffect(() => {
    setopen(false);
  }, [pathname]);
  return (
    <div className=" lg:mx-16 m-0 border-t-2 lg:w-11/12 w-full  h-[47rem] border-black mt-4 ">
      <div className=" flex justify-between pl-4 pr-10 py-8 border-b-4 ">
        <h2 className=" text-4xl">{pathname === "expense" ? "EXPENSE" : "INCOME"}</h2>
        <button
          className=" border-2 border-black rounded-md px-4 py-2"
          onClick={handleAddListItems}
        >
          Add
        </button>
      </div>
      <div>
        {open ? <AddListItem setopenCallback={handleClose} /> : <List />}
      </div>
    </div>
  );
};

export default IncomeExpence;
