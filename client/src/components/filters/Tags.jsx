import React from "react";
import { useStore } from "../../hooks/useStore";

const Tags = () => {
  const { labels, label, setLabel } = useStore();

  const handleClick = (tag) => {
    if (label === tag) {
      setLabel("");
    } else {
      setLabel(tag);
    }
  };
  return (
    <div className="bg-white rounded-md shadow-sm px-10 py-8">
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setLabel("")}
          className={`border ${
            label === "" ? "border-blue-500 font-semibold" : "border-gray-300"
          } rounded-full px-4 py-[6px] text-sm`}
        >
          All
        </button>
        {labels?.map((l) => (
          <button
            key={l?._id}
            onClick={() => handleClick(l?.label)}
            className={`border ${
              label === l?.label
                ? "border-blue-500 font-semibold"
                : "border-gray-300"
            } rounded-full px-4 py-[6px] text-sm`}
          >
            {l?.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
