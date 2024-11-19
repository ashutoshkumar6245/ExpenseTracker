import React, { useEffect, useState } from "react";
import "./style.css";
import DatePicker from "react-multi-date-picker";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { deleteExpense } from "../../redux/ExpenseSice";
import { deleteIncome } from "../../redux/IncomeSlice";

const List = () => {
  const expense = useSelector((state) => state.expense);
  const income = useSelector((state) => state.income);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [value, setValue] = useState([new Date(), new Date()]); // Default to the full date range

  const path = localStorage.getItem("path");
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (path === "income") {
      dispatch(deleteIncome(id));
      setData(income); // Refresh the data after deletion
    } else if (path === "expense") {
      dispatch(deleteExpense(id));
      setData(expense); // Refresh the data after deletion
    }
  };

  // Filter data based on date range and search query
  const filterData = (startDate, endDate, query) => {
    const filtered = data.filter((item) => {
      const itemDate = new Date(item.date); // Assuming each item has a 'date' property
      const isInRange = itemDate >= startDate && itemDate <= endDate;
      const matchesSearch = 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase());

      return isInRange && matchesSearch;
    });
    setFilteredData(filtered); // Update the filtered data state
  };

  useEffect(() => {
    if (path === "income") {
      setData(income);
    } else if (path === "expense") {
      setData(expense);
    }
  }, [path, income, expense]);

  // Whenever the DatePicker value or search query changes, filter the data
  useEffect(() => {
    if (value && value.length === 2) {
      const [startDate, endDate] = value;
      filterData(new Date(startDate), new Date(endDate), searchQuery);
    }
  }, [value, data, searchQuery]); // Re-run the filter when `value`, `data`, or `searchQuery` changes

  useEffect(() => {
    // On initial render or after data is loaded, filter based on the current date range and search query
    if (value && value.length === 2) {
      const [startDate, endDate] = value;
      filterData(new Date(startDate), new Date(endDate), searchQuery);
    }
  }, [data, searchQuery]); // Re-filter data when either data or searchQuery changes

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <div className="flex gap-4" >
            <h2 className="text-4xl">List View</h2>
            <input
          type="text"
          className="p-2 w-[22.5rem] h-[3.125rem] border-2 border-black rounded"
          placeholder="Search by title or category"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
        />
     </div>
        <div className="text-xl ">
          Filter Date:
          <DatePicker
            value={value}
            onChange={setValue}
            range
            maxDate={new Date()}
            placeholder="Filter Date"
          />
        </div>
       
      </div>

      <div className="caveat-List p-4 lg:h-[33rem] h-[30rem] overflow-y-scroll mt-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className="border-2 border-black p-4 mt-4 flex justify-between" key={item.id}>
              <div>
                <div className="flex gap-10">
                  <div className="text-4xl">{item.title}</div>
                  <div className="text-4xl">{item.category}</div>
                </div>
                <div>
                  <div className="text-2xl">{item.description}</div>
                </div>
              </div>
              <div>
                <div className="flex gap-10">
                  <button>
                    <CiEdit />
                  </button>
                  <button onClick={() => handleDelete(item.id)}>
                    <MdDelete />
                  </button>
                </div>
                <div className="text-3xl pt-4">₹{item.amount}</div>
              </div>
            </div>
          ))
        ) : (
          <div>No records found for the selected date range and search criteria.</div>
        )}
      </div>
    </div>
  );
};

export default List;
