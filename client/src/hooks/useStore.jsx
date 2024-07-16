import React, { useContext, createContext, useState, useEffect } from "react";

const StoreContext = createContext();
const StoreProvider = ({ children }) => {
  const [labels, setLabels] = useState([]);
  const [meals, setMeals] = useState([]);
  const [label, setLabel] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [totalMeals, setTotalMeals] = useState(0);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const getLabels = async () => {
    try {
      const res = await fetch("http://localhost:3000/labels", {
        method: "GET",
      });
      if (res.status === 200) {
        const data = await res.json();
        setLabels(data);
      } else {
        setLabels([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMeals = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/meals?tag=${label.toLowerCase()}&page=${page}&limit=${limit}`,
        {
          method: "GET",
        }
      );
      if (res.status === 200) {
        const data = await res.json();
        setMeals(data.meals);
        setTotalMeals(data.total);
      } else {
        setMeals([]);
        setTotalMeals(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLabels();
  }, []);

  useEffect(() => {
    getMeals();
  }, [page, limit, label]);

  const addMealToSelection = (meal) => {
    setSelectedMeals((prevSelectedMeals) => [...prevSelectedMeals, meal]);
  };

  const removeMealFromSelection = (index) => {
    setSelectedMeals((prevSelectedMeals) =>
      prevSelectedMeals.filter((meal, idx) => idx !== index)
    );
  };

  const value = {
    labels,
    meals,
    label,
    setLabel,
    page,
    setPage,
    limit,
    setLimit,
    totalMeals,
    selectedMeals,
    addMealToSelection,
    removeMealFromSelection,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { useStore, StoreProvider };
