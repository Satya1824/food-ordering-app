import React from "react";
import { useStore } from "../../hooks/useStore";

const Cart = () => {
  const { selectedMeals, removeMealFromSelection } = useStore(); // Assuming removeMeal is a function to remove a meal

  const calculateTotalPrice = () => {
    return selectedMeals
      .reduce((total, meal) => total + parseFloat(meal.totalPrice), 0)
      .toFixed(2);
  };

  const handleDeleteMeal = (index) => {
    removeMealFromSelection(index);
  };

  return (
    <>
      {selectedMeals.length !== 0 && (
        <div className="ml-14">
          <h2 className="font-bold text-lg mb-4">Selected Meals</h2>
          <div>
            {selectedMeals?.map((meal, index) => (
              <div
                key={index}
                className="mb-1 px-4 py-2 bg-white rounded-lg border shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{meal.title}</h3>
                  <button
                    className="text-red-500 hover:text-red-700 active:scale-[.95]"
                    onClick={() => handleDeleteMeal(index)}
                  >
                    X
                  </button>
                </div>
                <div className="flex items-center justify-between gap-10">
                  <p>Drink: {meal.selectedDrink?.title}</p>
                  <p>Total: {meal.totalPrice}$</p>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between gap-10">
              <h3 className="font-bold text-lg mt-4">Grand Total:</h3>
              <h3 className="font-bold text-lg mt-4">
                {calculateTotalPrice()}$
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
