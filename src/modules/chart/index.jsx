// App.js

import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { useSelector } from "react-redux";

const Visualization = () => {
    const expense = useSelector((state) => state.expense);
    const income = useSelector((state) => state.income);
const groupByMonth = (data) => {
    return data.reduce((acc, item) => {
      
      const date = new Date(item.date);
      const month = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, '0'); // Format YYYY-MM
      
      if (!acc[month]) {
        acc[month] = 0; // Initialize the sum for the month
      }
  
      acc[month] += item.amount; // Add the amount to the respective month
      return acc;
    }, {});
  };
  
  
  const getMonthWiseIncome = (income) => {
    return groupByMonth(income);
  };
  
 
  const getMonthWiseExpense = (expense) => {
    return groupByMonth(expense);
  };
const incomeData=getMonthWiseIncome(income)
const expenseData=getMonthWiseExpense(expense);


  const pdata = [
    {
      name: "jan",
      Expense: expenseData["2024-01"],
      Income: incomeData["2024-01"],
    },
    {
        name: "feb",
        Expense: expenseData["2024-02"],
        Income: incomeData["2024-02"],
      },
      {
        name: "mar",
        Expense: expenseData["2024-03"],
      Income: incomeData["2024-03"],
      },
      {
          name: "apr",
          Expense: expenseData["2024-04"],
      Income: incomeData["2024-04"],
        },
        {
            name: "may",
            Expense: expenseData["2024-05"],
      Income: incomeData["2024-05"],
          },
          {
              name: "jun",
              Expense: expenseData["2024-06"],
              Income: incomeData["2024-06"],
            },
            {
                name: "jul",
                Expense: expenseData["2024-07"],
                Income: incomeData["2024-07"],
              },
              {
                  name: "aug",
                  Expense: expenseData["2024-08"],
      Income: incomeData["2024-08"],
                },
                {
                    name: "sep",
                    Expense: expenseData["2024-09"],
                    Income: incomeData["2024-09"],
                  },
                  {
                      name: "oct",
                      Expense: expenseData["2024-10"],
                      Income: incomeData["2024-10"],
                    },
                    {
                        name: "nov",
                        Expense: expenseData["2024-11"],
                        Income: incomeData["2024-11"],
                      },
                      {
                        name: "dec",
                        Expense: expenseData["2024-12"],
      Income: incomeData["2024-12"],
                      }
  ];

  return (
    <div className="lg:mx-16 m-0  border-t-2 lg:w-11/12 w-full h-[47rem] border-black mt-4">
      <div className=" border-b-4 py-8 mb-8 ">
        <h2 className=" text-4xl">VISUALIZATION</h2>
      </div>
      <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} margin={{ right: 20 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="Expense" stroke="black" activeDot={{ r: 8 }} />
          <Line dataKey="Income" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      </div>
     
    </div>
  );
};

export default Visualization;
