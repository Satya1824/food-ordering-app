import React, { useState } from "react";
import Drink from "../drinks/Drink";
import { useStore } from "../../hooks/useStore";

const MealCard = ({ data }) => {
  const [drink, setDrink] = useState(0);

  const { addMealToSelection } = useStore();

  const formatPrice = (price) => price.toFixed(2);

  const handleSelect = () => {
    const selectedMeal = {
      ...data,
      selectedDrink: data.drinks[drink],
      totalPrice: formatPrice(data.price + data.drinks[drink].price),
    };
    console.log(selectedMeal);
    addMealToSelection(selectedMeal);
  };

  return (
    <div className="flex gap-2">
      <div className="w-[35%]">
        <img
          className="h-[300px]"
          src="https://plus.unsplash.com/premium_photo-1675676486598-733979a2218f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVhbHN8ZW58MHx8MHx8fDA%3D"
          alt={data?.title}
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {" "}
          <p className="text-sm mb-2 mt-1">{data?.title} + drink</p>
          <h1 className="font-bold text-xl">
            Latvian style chicken with fried potatoes, mushrooms and vegetables
          </h1>
          <p className="mt-2 mb-1 text-sm">
            <span className="font-semibold">Starter </span>
            {data?.starter}
          </p>
          <p className="text-sm mb-1">
            <span className="font-semibold">Desert </span>
            {data?.desert}
          </p>
          <p className="text-sm mb-1">
            <span className="font-semibold">Selected drink </span>
            {data?.drinks[drink]?.title}
          </p>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex gap-2">
            {data?.drinks?.map((d, i) => (
              <Drink
                key={i}
                data={d}
                index={i}
                drink={drink}
                setDrink={setDrink}
              />
            ))}
          </div>

          <div>
            <p className="text-lg mb-2 font-semibold">
              {formatPrice(data?.price + data?.drinks[drink]?.price)}$
            </p>
            <button
              onClick={handleSelect}
              className="border text-blue-500 border-blue-500 px-8 py-2 rounded active:scale-[.98] active:bg-blue-500 active:text-white font-bold text-sm"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
