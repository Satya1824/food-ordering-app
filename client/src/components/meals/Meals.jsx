import React from "react";
import { useStore } from "../../hooks/useStore";
import MealCard from "./MealCard";

const Meals = () => {
  const { meals } = useStore();
  return (
    <div className="bg-white rounded-md shadow-sm px-10 py-8 mt-1">
      <div className="flex flex-col gap-5">
        {meals?.map((m) => (
          <>
            <MealCard key={m?._id} data={m} />
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default Meals;
