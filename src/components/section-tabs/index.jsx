import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import ScrollView from "@/base-ui/scroll-view";

import { SectionTabsWrapper } from "./style";
let classNames = require("classnames");
const SectionTabs = memo((props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { tabs, handleTabClick} = props;

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabs?.map((item, index) => (
          <div
            key={item.name}
            className={classNames("item", {
              active: activeIndex == index,
            })}
            onClick={(e) => {
              handleTabClick(item.name);
              setActiveIndex(index);
            }}
          >
            {item.name}
          </div>
        ))}
      </ScrollView>
    </SectionTabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabs: PropTypes.array,
};

export default SectionTabs;
