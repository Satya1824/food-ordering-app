import React from "react";

const Drink = ({ data, index, drink, setDrink }) => {
  return (
    <button
      onClick={() => setDrink(index)}
      className={`h-12 w-[45px] border ${
        drink === index ? "border-blue-500" : "border-gray-300"
      } rounded-md p-1`}
    >
      {index === 0 && (
        <img
          className="h-full w-full"
          src="https://png.pngtree.com/png-clipart/20240304/original/pngtree-3d-soft-drink-white-background-png-image_14500716.png"
          alt="drink1"
        />
      )}
      {index === 1 && (
        <img
          className="h-full w-full"
          src="https://st2.depositphotos.com/1817018/6987/i/950/depositphotos_69877525-stock-photo-glass-of-cold-ice-tea.jpg"
          alt="drink2"
        />
      )}
      {index === 2 && (
        <img
          className="h-full w-full"
          src="https://image1.masterfile.com/getImage/NzAwLTAzNzM4MDM1ZW4uMDAwMDAwMDA=AJn86R/700-03738035en_Masterfile.jpg"
          alt="drink3"
        />
      )}
    </button>
  );
};

export default Drink;
