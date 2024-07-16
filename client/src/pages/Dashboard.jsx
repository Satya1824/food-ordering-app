import React from "react";
import Tags from "../components/filters/Tags";
import Meals from "../components/meals/Meals";
import Paginator from "../components/pagination/Paginator";
import Cart from "../components/cart/Cart";

const Dashboard = () => {
  return (
    <main className="flex px-20 py-2">
      <div className="flex-1">
        <Tags />
        <Meals />
        <Paginator />
      </div>
      <div className="">
        <Cart />
      </div>
    </main>
  );
};

export default Dashboard;
