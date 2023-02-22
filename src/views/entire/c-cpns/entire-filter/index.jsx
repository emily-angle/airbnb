import React, { memo, useState } from "react";
import classNames from "classnames";
import { EntireFilterWrapper } from "./style";
import filterData from "@/assets/data/filter-data.json";

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);
  const itemHandleClick = (item) => {
    let newItems = [...selectItems];
    if (newItems.includes(item)) {
      newItems.splice(newItems.indexOf(item), 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  };
  return (
    <EntireFilterWrapper>
      <div className="filter">
        {filterData.map((item) => (
          <div
            key={item}
            className={classNames(["item", { active: selectItems.includes(item) }])}
            onClick={(e) => itemHandleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </EntireFilterWrapper>
  );
});

export default EntireFilter;
